package solution

import (
	"reflect"
	"slices"
	"testing"
)

func valid(graph [][]int, order []int) bool {
	rank := make([]int, len(graph))
	for i, v := range order {
		rank[v] = i
	}
	for u, neighbors := range graph {
		for _, v := range neighbors {
			if rank[u] >= rank[v] {
				return false
			}
		}
	}
	return true
}

func TestAgainstAllPermutations(t *testing.T) {
	orders := [][]int{{0, 1, 2}, {0, 2, 1}, {1, 0, 2}, {1, 2, 0}, {2, 0, 1}, {2, 1, 0}}
	for mask := range 1 << 9 {
		graph, original := make([][]int, 3), make([][]int, 3)
		for u := range 3 {
			for v := range 3 {
				if mask&(1<<(u*3+v)) != 0 {
					graph[u] = append(graph[u], v)
				}
			}
			original[u] = slices.Clone(graph[u])
		}
		possible := false
		for _, order := range orders {
			possible = possible || valid(graph, order)
		}
		result := TopologicalSort(graph)
		if !possible {
			if result != nil {
				t.Fatal("cycle produced an order")
			}
		} else {
			sorted := slices.Clone(result)
			slices.Sort(sorted)
			if !slices.Equal(sorted, []int{0, 1, 2}) || !valid(graph, result) {
				t.Fatalf("invalid order %v", result)
			}
		}
		if !reflect.DeepEqual(graph, original) {
			t.Fatal("input mutated")
		}
	}
}

func TestBoundaryCasesAndTies(t *testing.T) {
	if got := TopologicalSort([][]int{{1, 2}, {3}, {3}, {4}, {}, {}}); !slices.Equal(got, []int{0, 5, 1, 2, 3, 4}) {
		t.Fatalf("got %v", got)
	}
	if got := TopologicalSort([][]int{{1, 1}, {}}); !slices.Equal(got, []int{0, 1}) {
		t.Fatalf("got %v", got)
	}
	if TopologicalSort([][]int{{1, 2}, {3}, {3}, {4}, {1}, {}}) != nil {
		t.Fatal("partial output accepted")
	}
	if got := TopologicalSort(nil); got == nil || len(got) != 0 {
		t.Fatal("expected empty, nonnil order")
	}
	if !slices.Equal(TopologicalSort([][]int{{}, {}, {}}), []int{0, 1, 2}) {
		t.Fatal("isolates missing")
	}
	defer func() {
		if recover() == nil {
			t.Fatal("expected panic")
		}
	}()
	TopologicalSort([][]int{{1}})
}
