package main

import (
	"fmt"
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

	// build the path backwards
	curr := needle
	path := []int{}

	for prev[curr] != -1 {
		path = append(path, curr)
		curr = prev[curr]
	}

	slices.Reverse(path)

	return append([]int{source}, path...)
}

func testBFS() {
	graph := WeightedAdjacencyMatrix{
		{0, 3, 1, 0, 0, 0, 0},
		{3, 0, 0, 4, 0, 0, 0},
		{1, 0, 0, 0, 2, 0, 0},
		{0, 4, 0, 0, 0, 5, 0},
		{0, 0, 2, 0, 0, 6, 0},
		{0, 0, 0, 5, 6, 0, 0},
		{0, 0, 0, 0, 0, 0, 0},
	}

	fmt.Printf("Path from 0 to 5: %v | Expected: [0 1 3 5]\n", bfs(graph, 0, 5))
	fmt.Printf("Path from 0 to 6: %v | Expected: [] (nil)\n", bfs(graph, 0, 6))
}

func main() {
	testBFS()
}
