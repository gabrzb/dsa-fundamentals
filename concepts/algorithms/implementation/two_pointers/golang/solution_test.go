package solution

import (
	"slices"
	"testing"
)

func TestReverseArray(t *testing.T) {
	for _, tc := range []struct {
		input, expected []int
	}{
		{nil, nil},
		{[]int{}, []int{}},
		{[]int{1}, []int{1}},
		{[]int{1, 2, 3, 4}, []int{4, 3, 2, 1}},
		{[]int{-1, 0, 2}, []int{2, 0, -1}},
		{[]int{1, 2, 1, 2}, []int{2, 1, 2, 1}},
	} {
		values := slices.Clone(tc.input)
		reverseArray(values)
		if !slices.Equal(values, tc.expected) {
			t.Errorf("reverse(%v) = %v; want %v", tc.input, values, tc.expected)
		}
		reverseArray(values)
		if !slices.Equal(values, tc.input) {
			t.Errorf("reversing twice did not restore %v", tc.input)
		}
	}
}
