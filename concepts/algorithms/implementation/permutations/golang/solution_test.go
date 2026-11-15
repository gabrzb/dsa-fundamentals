package solution

import (
	"reflect"
	"slices"
	"testing"
)

func TestPermutations(t *testing.T) {
	for _, tc := range []struct {
		values   []int
		expected [][]int
	}{
		{nil, [][]int{{}}},
		{[]int{5}, [][]int{{5}}},
		{[]int{3, 1, 2}, [][]int{{1, 2, 3}, {1, 3, 2}, {2, 1, 3}, {2, 3, 1}, {3, 1, 2}, {3, 2, 1}}},
		{[]int{2, 1, 1}, [][]int{{1, 1, 2}, {1, 2, 1}, {2, 1, 1}}},
		{[]int{1, 1}, [][]int{{1, 1}}},
		{[]int{0, -1}, [][]int{{-1, 0}, {0, -1}}},
	} {
		original := slices.Clone(tc.values)
		if got := permutations(tc.values); !reflect.DeepEqual(got, tc.expected) {
			t.Errorf("permutations(%v) = %v; want %v", tc.values, got, tc.expected)
		}
		if !slices.Equal(tc.values, original) {
			t.Fatal("input was modified")
		}
	}
}

func TestIndependentPermutations(t *testing.T) {
	result := permutations([]int{1, 2})
	result[0][0] = 99
	if !slices.Equal(result[1], []int{2, 1}) {
		t.Fatal("permutations share their storage")
	}
}
