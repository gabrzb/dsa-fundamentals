package solution

import (
	"slices"
)

type WeightedAdjacencyMatrix [][]int

func bfs(graph WeightedAdjacencyMatrix, source, needle int) []int {
	seen := make([]bool, len(graph))
	prev := make([]int, len(graph))
	for i := range prev {
		prev[i] = -1
	}

	seen[source] = true
	queue := []int{source}

	for len(queue) > 0 {
		curr := queue[0]
		queue = queue[1:]

		if curr == needle {
			break
		}

		for i, weight := range graph[curr] {
			if weight == 0 || seen[i] {
				continue
			}

			seen[i] = true
			prev[i] = curr
			queue = append(queue, i)
		}
	}

	if prev[needle] == -1 {
		return nil
	}

	curr := needle
	path := []int{}

	for prev[curr] != -1 {
		path = append(path, curr)
		curr = prev[curr]
	}

	slices.Reverse(path)

	return append([]int{source}, path...)
}
