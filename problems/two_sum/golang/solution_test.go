package solution

import (
	"slices"
	"testing"
)

func TestTwoSum(t *testing.T) {
	cases := []struct {
		values   []int
		target   int
		expected []int
	}{
		{[]int{2, 7, 11, 15}, 9, []int{0, 1}}, {[]int{3, 2, 4}, 6, []int{1, 2}},
		{[]int{3, 3}, 6, []int{0, 1}}, {[]int{-1, 2, 4}, 3, []int{0, 2}}, {nil, 1, nil}, {[]int{3}, 6, nil},
	}
	for _, tc := range cases {
		if got := twoSum(tc.values, tc.target); !slices.Equal(got, tc.expected) {
			t.Errorf("twoSum(%v, %d) = %v; want %v", tc.values, tc.target, got, tc.expected)
		}
	}
}
