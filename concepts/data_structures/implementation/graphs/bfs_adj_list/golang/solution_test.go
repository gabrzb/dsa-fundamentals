package solution

import (
	"reflect"
	"slices"
	"testing"
)

func TestAllThreeVertexGraphs(t *testing.T) {
	for mask := range 1 << 9 {
		graph, original := make([][]int, 3), make([][]int, 3)
		distance := [3][3]int{}
		for u := range 3 {
			for v := range 3 {
				if u != v {
					distance[u][v] = 4
				}
				if mask&(1<<(u*3+v)) != 0 {
					graph[u] = append(graph[u], v)
					distance[u][v] = min(distance[u][v], 1)
				}
			}
			original[u] = slices.Clone(graph[u])
		}
		for k := range 3 {
			for u := range 3 {
				for v := range 3 {
					distance[u][v] = min(distance[u][v], distance[u][k]+distance[k][v])
				}
			}
		}
		for source := range 3 {
			for target := range 3 {
				path := BFS(graph, source, target)
				if distance[source][target] == 4 {
					if path != nil {
						t.Fatal("unreachable target returned a path")
					}
					continue
				}
				if len(path) != distance[source][target]+1 || path[0] != source || path[len(path)-1] != target {
					t.Fatalf("invalid shortest path %v", path)
				}
				for i := 1; i < len(path); i++ {
					if !slices.Contains(graph[path[i-1]], path[i]) {
						t.Fatal("nonedge in path")
					}
				}
			}
		}
		if !reflect.DeepEqual(graph, original) {
			t.Fatal("input mutated")
		}
	}
}

func TestNeighborOrderAndMissingPath(t *testing.T) {
	graph := [][]int{{2, 1, 2}, {3}, {3}, {4}, {}, {}}
	if !slices.Equal(BFS(graph, 0, 4), []int{0, 2, 3, 4}) || !slices.Equal(BFS(graph, 2, 2), []int{2}) || BFS(graph, 0, 5) != nil {
		t.Fatal("incorrect path")
	}
}

func TestInvalidIndices(t *testing.T) {
	for _, tc := range []struct {
		graph          [][]int
		source, target int
	}{{nil, 0, 0}, {[][]int{{}}, -1, 0}, {[][]int{{}}, 0, 1}, {[][]int{{-1}}, 0, 0}, {[][]int{{}, {2}}, 0, 0}} {
		func() {
			defer func() {
				if recover() == nil {
					t.Fatal("expected panic")
				}
			}()
			BFS(tc.graph, tc.source, tc.target)
		}()
	}
}
