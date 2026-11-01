package solution

import (
	"testing"
)

func TestInsertPosition(t *testing.T) {
	for _, tc := range []struct{ target, expected int }{{0, 0}, {2, 1}, {5, 2}, {7, 3}} {
		if got := searchInsert([]int{1, 3, 5}, tc.target); got != tc.expected {
			t.Errorf("searchInsert(%d) = %d; want %d", tc.target, got, tc.expected)
		}
	}
	if got := searchInsert(nil, 1); got != 0 {
		t.Fatalf("empty insertion = %d; want 0", got)
	}
}
