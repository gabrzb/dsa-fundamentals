package solution

import (
	"math/rand/v2"
	"slices"
	"testing"
)

func TestSort(t *testing.T) {
	cases := [][]int{
		{}, {1}, {0, 0}, {-1}, {3, 1, 2, 1}, {0, 10, 2, 100}, {1, 2, 3}, {3, 2, 1},
		{-3, 0, 2, -1, 2, -3}, {-1, -10, -2, -100, -10}, {-12, -2, -21, -1},
	}
	for _, input := range cases {
		values := slices.Clone(input)
		expected := slices.Clone(input)
		slices.Sort(expected)
		got := radixSort(values)
		if !slices.Equal(got, expected) {
			t.Errorf("sort(%v) = %v; want %v", input, got, expected)
		}
	}
}

func TestIntegerLimits(t *testing.T) {
	largest := int(^uint(0) >> 1)
	smallest := -largest - 1
	for _, input := range [][]int{
		{largest, smallest, 0, -1, 1, smallest, largest},
		{smallest}, {smallest, smallest + 1, -1},
	} {
		expected := slices.Clone(input)
		slices.Sort(expected)
		if got := radixSort(input); !slices.Equal(got, expected) {
			t.Fatalf("sort(%v) = %v; want %v", input, got, expected)
		}
	}
}

func TestRandomIntegers(t *testing.T) {
	random := rand.New(rand.NewPCG(1, 2))
	for range 100 {
		input := make([]int, 100)
		for index := range input {
			input[index] = int(random.Uint64())
		}
		expected := slices.Clone(input)
		slices.Sort(expected)
		if got := radixSort(input); !slices.Equal(got, expected) {
			t.Fatalf("sort = %v; want %v", got, expected)
		}
	}
}
