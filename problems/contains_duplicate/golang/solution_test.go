package solution

import (
	"testing"
)

func TestContainsDuplicate(t *testing.T) {
	for _, tc := range []struct {
		values   []int
		expected bool
	}{{nil, false}, {[]int{1, 2, 3}, false}, {[]int{1, 2, 1}, true}, {[]int{0, 0}, true}} {
		if got := containsDuplicate(tc.values); got != tc.expected {
			t.Errorf("containsDuplicate(%v) = %t; want %t", tc.values, got, tc.expected)
		}
	}
}
