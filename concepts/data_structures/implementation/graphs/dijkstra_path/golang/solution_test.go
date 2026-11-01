package solution

import (
	"slices"
	"testing"
)

func TestLowestWeightAndUnreachable(t *testing.T) {
	graph := WeightedAdjacencyList{{{1, 4}, {2, 1}}, {{3, 1}}, {{1, 2}, {3, 5}}, {}, {}}
	if got := dijkstraList(0, 3, graph); !slices.Equal(got, []int{0, 2, 1, 3}) {
		t.Fatalf("path = %v", got)
	}
	if got := dijkstraList(0, 4, graph); got != nil {
		t.Fatalf("unreachable path = %v", got)
	}
	if got := dijkstraList(2, 2, graph); !slices.Equal(got, []int{2}) {
		t.Fatalf("same vertex path = %v", got)
	}
}
