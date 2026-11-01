package solution

import (
	"testing"
)

func TestMinimumDistance(t *testing.T) {
	if got := getMinDistance([]int{1, 2, 3, 2}, 2, 2); got != 1 {
		t.Fatalf("distance = %d; want 1", got)
	}
	if got := getMinDistance([]int{1}, 1, 0); got != 0 {
		t.Fatalf("distance = %d; want 0", got)
	}
}
