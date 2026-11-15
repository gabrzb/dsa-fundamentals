package solution

import (
	"reflect"
	"slices"
	"testing"
)

func TestAllFourVertexGraphs(t *testing.T) {
	edges := [][2]int{}
	for u := range 4 {
		for v := u + 1; v < 4; v++ {
			edges = append(edges, [2]int{u, v})
		}
	}
	for mask := range 1 << len(edges) {
		graph, original := make([][]int, 4), make([][]int, 4)
		reach := [4][4]bool{}
		for v := range 4 {
			reach[v][v] = true
		}
		for index, edge := range edges {
			if mask&(1<<index) != 0 {
				u, v := edge[0], edge[1]
				graph[u] = append(graph[u], v)
				graph[v] = append(graph[v], u)
				reach[u][v] = true
				reach[v][u] = true
			}
		}
		for u := range graph {
			original[u] = slices.Clone(graph[u])
		}
		for k := range 4 {
			for u := range 4 {
				for v := range 4 {
					reach[u][v] = reach[u][v] || reach[u][k] && reach[k][v]
				}
			}
		}
		labels := []int{-1, -1, -1, -1}
		for group, vertices := range ConnectedComponents(graph) {
			if len(vertices) == 0 {
				t.Fatal("empty component")
			}
			for _, vertex := range vertices {
				if labels[vertex] != -1 {
					t.Fatal("repeated vertex")
				}
				labels[vertex] = group
			}
		}
		if slices.Contains(labels, -1) {
			t.Fatal("missing vertex")
		}
		for u := range 4 {
			for v := range 4 {
				if (labels[u] == labels[v]) != reach[u][v] {
					t.Fatal("partition disagrees with reachability")
				}
			}
		}
		if !reflect.DeepEqual(graph, original) {
			t.Fatal("input mutated")
		}
	}
}

func TestBoundaryCases(t *testing.T) {
	if got := ConnectedComponents([][]int{{1, 2}, {0}, {0}, {4}, {3}, {}}); !reflect.DeepEqual(got, [][]int{{0, 1, 2}, {3, 4}, {5}}) {
		t.Fatalf("got %v", got)
	}
	if got := ConnectedComponents([][]int{{0, 1, 1}, {0, 0}, {}}); !reflect.DeepEqual(got, [][]int{{0, 1}, {2}}) {
		t.Fatalf("got %v", got)
	}
	if got := ConnectedComponents(nil); got == nil || len(got) != 0 {
		t.Fatal("expected empty result")
	}
	defer func() {
		if recover() == nil {
			t.Fatal("expected invalid-index panic")
		}
	}()
	ConnectedComponents([][]int{{1}})
}
