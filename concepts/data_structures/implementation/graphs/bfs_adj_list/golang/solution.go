package solution

import (
	adjacencylist "dsa/concepts/data_structures/implementation/graphs/adjacency_list/golang"
	"slices"
)

func BFS(graph [][]int, source, target int) []int {
	adjacencylist.Validate(graph)
	adjacencylist.ValidateVertex(source, len(graph))
	adjacencylist.ValidateVertex(target, len(graph))
	seen := make([]bool, len(graph))
	previous := make([]int, len(graph))
	for i := range previous {
		previous[i] = -1
	}
	seen[source] = true
	queue := []int{source}
	for head := 0; head < len(queue); head++ {
		current := queue[head]
		if current == target {
			path := []int{}
			for current != -1 {
				path = append(path, current)
				current = previous[current]
			}
			slices.Reverse(path)
			return path
		}
		for _, neighbor := range graph[current] {
			if !seen[neighbor] {
				seen[neighbor] = true
				previous[neighbor] = current
				queue = append(queue, neighbor)
			}
		}
	}
	return nil
}
