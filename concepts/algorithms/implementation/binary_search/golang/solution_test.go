package solution

import (
	"testing"
)

func TestSearch(t *testing.T) {
	cases := []struct {
		values           []int
		target, expected int
	}{
		{nil, 1, -1}, {[]int{1}, 1, 0}, {[]int{1, 3, 5}, 1, 0},
		{[]int{1, 3, 5}, 5, 2}, {[]int{1, 3, 5}, 2, -1},
	}
	for _, tc := range cases {
		if got := binarySearch(tc.values, tc.target); got != tc.expected {
			t.Errorf("search(%v, %d) = %d; want %d", tc.values, tc.target, got, tc.expected)
		}
	}
}
