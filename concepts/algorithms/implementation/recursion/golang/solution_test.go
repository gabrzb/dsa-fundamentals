package solution

import (
	"slices"
	"testing"
)

func TestMazePaths(t *testing.T) {
	expected := []Point{{0, 0}, {1, 0}, {2, 0}}
	if got := solve([]string{"   "}, 'x', Point{0, 0}, Point{2, 0}); !slices.Equal(got, expected) {
		t.Fatalf("path = %v; want %v", got, expected)
	}
	if got := solve([]string{" x "}, 'x', Point{0, 0}, Point{2, 0}); len(got) != 0 {
		t.Fatalf("unreachable path = %v", got)
	}
}
