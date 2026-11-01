package solution

import (
	"slices"
	"testing"
)

func TestSort(t *testing.T) {
	cases := [][]int{{}, {1}, {3, 1, 2, 1}, {0, 10, 2, 100}, {1, 2, 3}, {3, 2, 1}, {-3, 0, 2, -1}}
	for _, input := range cases {
		values := slices.Clone(input)
		expected := slices.Clone(input)
		slices.Sort(expected)
		got := insertionSort(values)
		if !slices.Equal(got, expected) {
			t.Errorf("sort(%v) = %v; want %v", input, got, expected)
		}
	}
}
