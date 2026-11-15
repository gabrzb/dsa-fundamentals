package solution

import (
	"slices"
	"testing"
)

func enumerateSubsets(weights, values []int, capacity int) int {
	result := 0
	for mask := 0; mask < 1<<len(weights); mask++ {
		weight, value := 0, 0
		for i := range weights {
			if mask&(1<<i) != 0 {
				weight += weights[i]
				value += values[i]
			}
		}
		if weight <= capacity {
			result = max(result, value)
		}
	}
	return result
}

func TestAgainstAllSubsets(t *testing.T) {
	for encoded := range 81 {
		state := encoded
		weights, values := make([]int, 4), make([]int, 4)
		for i := range weights {
			weights[i] = state%3 + 1
			state /= 3
			values[i] = i * (weights[i] + 1)
		}
		for capacity := 0; capacity <= 8; capacity++ {
			for _, solve := range []func([]int, []int, int) int{Memoized, Tabulated} {
				originalWeights, originalValues := slices.Clone(weights), slices.Clone(values)
				if got, want := solve(weights, values, capacity), enumerateSubsets(weights, values, capacity); got != want {
					t.Fatalf("got %d want %d", got, want)
				}
				if !slices.Equal(weights, originalWeights) || !slices.Equal(values, originalValues) {
					t.Fatal("input mutated")
				}
			}
		}
	}
}

func TestBoundaryCases(t *testing.T) {
	for _, solve := range []func([]int, []int, int) int{Memoized, Tabulated} {
		for _, tc := range []struct {
			weights, values []int
			capacity, want  int
		}{
			{[]int{2, 3, 4}, []int{4, 5, 7}, 5, 9}, {[]int{2}, []int{3}, 4, 3}, {[]int{2, 2}, []int{3, 3}, 4, 6},
			{nil, nil, 5, 0}, {[]int{2}, []int{3}, 0, 0}, {[]int{2}, []int{0}, 2, 0}, {[]int{5}, []int{8}, 3, 0},
		} {
			if got := solve(tc.weights, tc.values, tc.capacity); got != tc.want {
				t.Fatalf("got %d want %d", got, tc.want)
			}
		}
	}
}

func TestInvalidInputs(t *testing.T) {
	for _, solve := range []func([]int, []int, int) int{Memoized, Tabulated} {
		for _, tc := range []struct {
			weights, values []int
			capacity        int
		}{
			{[]int{1}, nil, 2}, {[]int{0}, []int{1}, 2}, {[]int{1}, []int{-1}, 2}, {nil, nil, -1},
			{nil, nil, int(^uint(0) >> 1)}, {[]int{1, 1}, []int{int(^uint(0) >> 1), 1}, 1},
		} {
			func() {
				defer func() {
					if recover() == nil {
						t.Fatal("expected panic")
					}
				}()
				solve(tc.weights, tc.values, tc.capacity)
			}()
		}
	}
}
