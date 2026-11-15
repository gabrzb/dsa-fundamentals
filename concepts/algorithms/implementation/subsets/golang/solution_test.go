package solution

import (
	"reflect"
	"slices"
	"testing"
)

func TestSubsets(t *testing.T) {
	for _, tc := range []struct {
		values   []int
		expected [][]int
	}{
		{nil, [][]int{{}}},
		{[]int{1}, [][]int{{}, {1}}},
		{[]int{2, 1}, [][]int{{}, {1}, {1, 2}, {2}}},
		{[]int{2, 1, 2}, [][]int{{}, {1}, {1, 2}, {1, 2, 2}, {2}, {2, 2}}},
		{[]int{-1, 0}, [][]int{{}, {-1}, {-1, 0}, {0}}},
	} {
		original := slices.Clone(tc.values)
		if got := subsets(tc.values); !reflect.DeepEqual(got, tc.expected) {
			t.Errorf("subsets(%v) = %v; want %v", tc.values, got, tc.expected)
		}
		if !slices.Equal(tc.values, original) {
			t.Fatal("input was modified")
		}
	}
}

func TestIndependentSubsets(t *testing.T) {
	result := subsets([]int{1, 2})
	result[2][0] = 99
	if result[1][0] != 1 || result[3][0] != 2 {
		t.Fatal("subsets share their storage")
	}
}
