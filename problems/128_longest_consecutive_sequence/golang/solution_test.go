package solution

import (
	"testing"
)

func TestConsecutiveSequence(t *testing.T) {
	for _, tc := range []struct {
		values   []int
		expected int
	}{{nil, 0}, {[]int{100, 4, 200, 1, 3, 2}, 4}, {[]int{1, 2, 0, 1}, 3}, {[]int{-2, -1, 0}, 3}} {
		if got := longestConsecutive(tc.values); got != tc.expected {
			t.Errorf("longestConsecutive(%v) = %d; want %d", tc.values, got, tc.expected)
		}
	}
}
