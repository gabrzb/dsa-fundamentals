package solution

import (
	"reflect"
	"slices"
	"testing"
)

func TestDirectedAgainstClosure(t *testing.T) {
	for mask := range 1 << 9 {
		graph, original := make([][]int, 3), make([][]int, 3)
		reach := [3][3]bool{}
		for u := range 3 {
			for v := range 3 {
				if mask&(1<<(u*3+v)) != 0 {
					graph[u] = append(graph[u], v)
					reach[u][v] = true
				}
			}
			original[u] = slices.Clone(graph[u])
		}
		for k := range 3 {
			for u := range 3 {
				for v := range 3 {
					reach[u][v] = reach[u][v] || reach[u][k] && reach[k][v]
				}
			}
		}
		want := false
		for v := range 3 {
			want = want || reach[v][v]
		}
		if HasDirectedCycle(graph) != want {
			t.Fatalf("wrong cycle result for %v", graph)
		}
		if !reflect.DeepEqual(graph, original) {
			t.Fatal("input mutated")
		}
	}
}

func TestUndirectedAgainstForestCount(t *testing.T) {
	edges := [][2]int{}
	for u := range 4 {
		for v := u + 1; v < 4; v++ {
			edges = append(edges, [2]int{u, v})
		}
	}
	for mask := range 1 << len(edges) {
		graph, original := make([][]int, 4), make([][]int, 4)
		parent := []int{0, 1, 2, 3}
		root := func(v int) int {
			for parent[v] != v {
				v = parent[v]
			}
			return v
		}
		edgeCount := 0
		for index, edge := range edges {
			if mask&(1<<index) != 0 {
				u, v := edge[0], edge[1]
				graph[u] = append(graph[u], v)
				graph[v] = append(graph[v], u)
				parent[root(u)] = root(v)
				edgeCount++
			}
		}
		for u := range graph {
			original[u] = slices.Clone(graph[u])
		}
		roots := map[int]bool{}
		for v := range 4 {
			roots[root(v)] = true
		}
		if HasUndirectedCycle(graph) != (edgeCount > 4-len(roots)) {
			t.Fatalf("wrong cycle result for %v", graph)
		}
		if !reflect.DeepEqual(graph, original) {
			t.Fatal("input mutated")
		}
	}
}

func TestSpecialCasesAndDeepChain(t *testing.T) {
	if HasDirectedCycle([][]int{{1, 2}, {}, {1}}) || HasDirectedCycle([][]int{{1, 1}, {}}) || !HasDirectedCycle([][]int{{}, {2}, {1}}) {
		t.Fatal("wrong directed cycle classification")
	}
	if HasUndirectedCycle([][]int{{1}, {0, 2}, {1}}) || !HasUndirectedCycle([][]int{{1, 1}, {0, 0}}) || !HasUndirectedCycle([][]int{{0}}) {
		t.Fatal("wrong undirected cycle classification")
	}
	if HasDirectedCycle(nil) || HasUndirectedCycle(nil) {
		t.Fatal("empty graph has no cycle")
	}
	graph := make([][]int, 3000)
	for v := 0; v < 2999; v++ {
		graph[v] = []int{v + 1}
	}
	if HasDirectedCycle(graph) {
		t.Fatal("chain is acyclic")
	}
	graph[2999] = []int{0}
	if !HasDirectedCycle(graph) {
		t.Fatal("closing edge should create cycle")
	}
	for _, solve := range []func([][]int) bool{HasDirectedCycle, HasUndirectedCycle} {
		func() {
			defer func() {
				if recover() == nil {
					t.Fatal("expected panic")
				}
			}()
			solve([][]int{{-1}})
		}()
	}
}
