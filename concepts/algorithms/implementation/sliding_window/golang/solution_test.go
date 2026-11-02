package solution

import (
	"slices"
	"testing"
)

func TestMaxWindowSum(t *testing.T) {
	for _, tc := range []struct {
		values         []int
		size, expected int
	}{
		{[]int{2, 1, 5, 1, 3, 2}, 3, 9},
		{[]int{-4, -2, -7, -1}, 2, -6},
		{[]int{-5, 0, 4, -1}, 1, 4},
		{[]int{1, 2, 3}, 3, 6},
		{[]int{1, 2, 3, 4}, 2, 7},
		{[]int{4, 3, 2, 1}, 2, 7},
		{[]int{0, 0, 0}, 2, 0},
		{[]int{-3}, 1, -3},
	} {
		original := slices.Clone(tc.values)
		if got := maxWindowSum(tc.values, tc.size); got != tc.expected {
			t.Errorf("maxWindowSum(%v, %d) = %d; want %d", tc.values, tc.size, got, tc.expected)
		}
		if !slices.Equal(tc.values, original) {
			t.Fatal("input was modified")
		}
	}
}

func TestInvalidWindowSize(t *testing.T) {
	for _, size := range []int{-1, 0, 4} {
		func() {
			defer func() {
				if recover() == nil {
					t.Errorf("window size %d should panic", size)
				}
			}()
			maxWindowSum([]int{1, 2, 3}, size)
		}()
	}
	t.Run("empty array", func(t *testing.T) {
		defer func() {
			if recover() == nil {
				t.Fatal("empty array should panic")
			}
		}()
		maxWindowSum(nil, 1)
	})
}
