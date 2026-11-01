package solution

import (
	"math"
	"slices"
)

type WeightedAdjacencyList [][][]int

func hasUnvisited(seen []bool, dists []float64) bool {
	for i, isSeen := range seen {
		if !isSeen && !math.IsInf(dists[i], 1) {
			return true
		}
	}

	return false
}

func getLowestUnvisited(seen []bool, dists []float64) int {
	idx := -1
	lowestDistance := math.Inf(1)

	for i, isSeen := range seen {
		if isSeen {
			continue
		}

		if lowestDistance > dists[i] {
			lowestDistance = dists[i]
			idx = i
		}
	}

	return idx
}

func dijkstraList(source, sink int, graph WeightedAdjacencyList) []int {
	seen := make([]bool, len(graph))
	prev := make([]int, len(graph))
	dists := make([]float64, len(graph))

	for i := range graph {
		prev[i] = -1
		dists[i] = math.Inf(1)
	}

	dists[source] = 0

	for hasUnvisited(seen, dists) {
		curr := getLowestUnvisited(seen, dists)
		seen[curr] = true

		for _, edge := range graph[curr] {
			to, weight := edge[0], edge[1]
			if seen[to] {
				continue
			}

			dist := dists[curr] + float64(weight)
			if dist < dists[to] {
				dists[to] = dist
				prev[to] = curr
			}
		}
	}

	if math.IsInf(dists[sink], 1) {
		return nil
	}

	out := []int{}
	curr := sink

	for prev[curr] != -1 {
		out = append(out, curr)
		curr = prev[curr]
	}

	out = append(out, source)
	slices.Reverse(out)

	return out
}
