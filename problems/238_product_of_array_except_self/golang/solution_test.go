package solution

import (
	"slices"
	"testing"
)

func TestProductExceptSelf(t *testing.T) {
	cases := []struct {
		nums     []int
		expected []int
	}{
		{[]int{1, 2, 3, 4}, []int{24, 12, 8, 6}},
		{[]int{-1, 1, 0, -3, 3}, []int{0, 0, 9, 0, 0}},
		{[]int{0, 2, 0}, []int{0, 0, 0}},
		{[]int{-2, 3}, []int{3, -2}},
		{[]int{2, 2, 3}, []int{6, 6, 4}},
	}

	for _, tc := range cases {
		if got := productExceptSelf(tc.nums); !slices.Equal(got, tc.expected) {
			t.Errorf("productExceptSelf(%v) = %v; want %v", tc.nums, got, tc.expected)
		}
	}
}
