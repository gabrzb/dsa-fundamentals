package solution

import (
	"reflect"
	"slices"
	"testing"
)

func reachability(size int, edges [][3]int) [][]bool {
	reach := make([][]bool, size)
	for u := range size {
		reach[u] = make([]bool, size)
		reach[u][u] = true
	}
	for _, e := range edges {
		reach[e[0]][e[1]] = true
		reach[e[1]][e[0]] = true
	}
	for k := range size {
		for u := range size {
			for v := range size {
				reach[u][v] = reach[u][v] || reach[u][k] && reach[k][v]
			}
		}
	}
	return reach
}

func checkForest(t *testing.T, size int, edges [][3]int) {
	t.Helper()
	expected := reachability(size, edges)
	components := 0
	for v := range size {
		earlier := false
		for u := 0; u < v; u++ {
			earlier = earlier || expected[v][u]
		}
		if !earlier {
			components++
		}
	}
	required := size - components
	optimum := int(^uint(0) >> 1)
	for mask := 0; mask < 1<<len(edges); mask++ {
		chosen := [][3]int{}
		weight := 0
		for i, e := range edges {
			if mask&(1<<i) != 0 {
				chosen = append(chosen, e)
				weight += e[2]
			}
		}
		if len(chosen) == required && reflect.DeepEqual(reachability(size, chosen), expected) {
			optimum = min(optimum, weight)
		}
	}
	original := slices.Clone(edges)
	forest := Prim(size, edges)
	weight := 0
	available := map[[3]int]int{}
	normalize := func(e [3]int) [3]int {
		if e[0] > e[1] {
			e[0], e[1] = e[1], e[0]
		}
		return e
	}
	for _, e := range edges {
		available[normalize(e)]++
	}
	for _, e := range forest {
		weight += e[2]
		key := normalize(e)
		if available[key] == 0 {
			t.Fatal("returned nonexistent or repeated edge")
		}
		available[key]--
	}
	if len(forest) != required || weight != optimum || !reflect.DeepEqual(reachability(size, forest), expected) {
		t.Fatalf("wrong forest %v: cost %d want %d", forest, weight, optimum)
	}
	if !slices.Equal(edges, original) {
		t.Fatal("input mutated")
	}
	if len(forest) > 0 {
		forest[0][2]++
	}
	if !slices.Equal(edges, original) {
		t.Fatal("result aliases input")
	}
}

func TestAllSmallForests(t *testing.T) {
	possible := [][3]int{}
	for u := range 4 {
		for v := u + 1; v < 4; v++ {
			possible = append(possible, [3]int{u, v, len(possible) - 2})
		}
	}
	for mask := range 1 << len(possible) {
		edges := [][3]int{}
		for i, e := range possible {
			if mask&(1<<i) != 0 {
				edges = append(edges, e)
			}
		}
		checkForest(t, 4, edges)
	}
}

func TestBoundaryCases(t *testing.T) {
	checkForest(t, 0, nil)
	checkForest(t, 4, nil)
	checkForest(t, 5, [][3]int{{0, 1, 4}, {0, 1, -2}, {1, 1, -100}, {1, 2, 0}})
	checkForest(t, 4, [][3]int{{0, 1, 1}, {1, 2, 1}, {2, 3, 1}, {3, 0, 1}, {0, 2, 1}})
	checkForest(t, 4, [][3]int{{0, 1, 4}, {0, 2, 1}, {2, 1, 2}, {1, 3, 1}, {2, 3, 5}})
}

func TestInvalidInputs(t *testing.T) {
	for _, tc := range []struct {
		size  int
		edges [][3]int
	}{{-1, nil}, {0, [][3]int{{0, 0, 1}}}, {2, [][3]int{{0, 2, 1}}}, {2, [][3]int{{-1, 1, 1}}}} {
		func() {
			defer func() {
				if recover() == nil {
					t.Fatal("expected panic")
				}
			}()
			Prim(tc.size, tc.edges)
		}()
	}
}
