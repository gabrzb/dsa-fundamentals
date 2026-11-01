package solution

import (
	"slices"
	"testing"
)

func TestPaths(t *testing.T) {
	graph := WeightedAdjacencyMatrix{{0, 1, 0, 0}, {1, 0, 1, 0}, {0, 1, 0, 0}, {0, 0, 0, 0}}
	if got := bfs(graph, 0, 2); !slices.Equal(got, []int{0, 1, 2}) {
		t.Fatalf("path = %v", got)
	}
	if got := bfs(graph, 0, 3); got != nil {
		t.Fatalf("unreachable path = %v", got)
	}
	if got := bfs(graph, 0, 0); !slices.Equal(got, []int{0}) {
		t.Fatalf("same vertex path = %v", got)
	}
}
