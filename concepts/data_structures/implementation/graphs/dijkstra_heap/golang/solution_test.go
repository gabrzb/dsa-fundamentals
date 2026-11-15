package solution

import (
	"reflect"
	"slices"
	"testing"
)

func TestAgainstFloydWarshall(t *testing.T) {
	for mask := range 1 << 9 {
		graph := make([][][]int, 3)
		distance := [3][3]int{}
		for u := range 3 {
			for v := range 3 {
				if u != v {
					distance[u][v] = 100
				}
				if mask&(1<<(u*3+v)) != 0 {
					weight := (u*3 + v) % 4
					graph[u] = append(graph[u], []int{v, weight})
					distance[u][v] = min(distance[u][v], weight)
				}
			}
		}
		original := make([][][]int, 3)
		for u := range graph {
			for _, edge := range graph[u] {
				original[u] = append(original[u], slices.Clone(edge))
			}
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
				result := Dijkstra(graph, source, target)
				if distance[source][target] == 100 {
					if result != nil {
						t.Fatal("unreachable path returned")
					}
					continue
				}
				if result == nil || result.Distance != distance[source][target] || result.Path[0] != source || result.Path[len(result.Path)-1] != target {
					t.Fatalf("incorrect path: %+v", result)
				}
				seen := map[int]bool{}
				cost := 0
				for i, v := range result.Path {
					if seen[v] {
						t.Fatal("cycle in returned path")
					}
					seen[v] = true
					if i > 0 {
						weight := 100
						for _, edge := range graph[result.Path[i-1]] {
							if edge[0] == v {
								weight = min(weight, edge[1])
							}
						}
						cost += weight
					}
				}
				if cost != result.Distance {
					t.Fatal("path cost mismatch")
				}
			}
		}
		if !reflect.DeepEqual(graph, original) {
			t.Fatal("input mutated")
		}
	}
}

func TestSpecialCases(t *testing.T) {
	graph := [][][]int{{{1, 4}, {2, 1}}, {{3, 1}}, {{1, 2}, {3, 5}}, {}, {}}
	if got := Dijkstra(graph, 0, 3); got.Distance != 4 || !slices.Equal(got.Path, []int{0, 2, 1, 3}) {
		t.Fatalf("got %+v", got)
	}
	if Dijkstra(graph, 0, 4) != nil {
		t.Fatal("expected no path")
	}
	if got := Dijkstra([][][]int{{{1, 9}, {1, 0}}, {{0, 0}}}, 0, 1); got.Distance != 0 || !slices.Equal(got.Path, []int{0, 1}) {
		t.Fatal("zero cycle or parallel edges failed")
	}
	if got := Dijkstra([][][]int{{}}, 0, 0); got.Distance != 0 || !slices.Equal(got.Path, []int{0}) {
		t.Fatal("source equals target failed")
	}
	if got := Dijkstra([][][]int{{{1, int(^uint(0) >> 1)}}, {}}, 0, 1); got.Distance != int(^uint(0)>>1) {
		t.Fatal("largest valid cost failed")
	}
}

func TestInvalidInputs(t *testing.T) {
	for _, tc := range []struct {
		graph          [][][]int
		source, target int
	}{
		{nil, 0, 0}, {[][][]int{{}}, -1, 0}, {[][][]int{{}}, 0, 1}, {[][][]int{{{1, 0}}}, 0, 0},
		{[][][]int{{{0, -1}}}, 0, 0}, {[][][]int{{{0}}}, 0, 0}, {[][][]int{{{1, int(^uint(0) >> 1)}}, {{2, 1}}, {}}, 0, 2},
	} {
		func() {
			defer func() {
				if recover() == nil {
					t.Fatal("expected panic")
				}
			}()
			Dijkstra(tc.graph, tc.source, tc.target)
		}()
	}
}
