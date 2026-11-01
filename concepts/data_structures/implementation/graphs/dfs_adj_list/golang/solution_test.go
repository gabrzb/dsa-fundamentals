package solution

import (
	"slices"
	"testing"
)

func TestCyclesAndPaths(t *testing.T) {
	graph := WeightedAdjacencyList{{{1, 1}}, {{0, 1}, {2, 1}}, {}, {}}
	if got := dfs(graph, 0, 2); !slices.Equal(got, []int{0, 1, 2}) {
		t.Fatalf("path = %v", got)
	}
	if got := dfs(graph, 0, 3); got != nil {
		t.Fatalf("unreachable path = %v", got)
	}
	if got := dfs(graph, 0, 0); !slices.Equal(got, []int{0}) {
		t.Fatalf("same vertex path = %v", got)
	}
}
