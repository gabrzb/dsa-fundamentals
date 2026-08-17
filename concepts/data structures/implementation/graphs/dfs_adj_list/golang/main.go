package main

import "fmt"

type WeightedAdjacencyList [][][]int

func walk(graph WeightedAdjacencyList, curr, needle int, seen []bool, path *[]int) bool {
	if seen[curr] {
		return false
	}

	seen[curr] = true

	// pre
	*path = append(*path, curr)

	if curr == needle {
		return true
	}

	// recurse
	for _, edge := range graph[curr] {
		if walk(graph, edge[0], needle, seen, path) {
			return true
		}
	}

	// post
	*path = (*path)[:len(*path)-1]

	return false
}

func dfs(graph WeightedAdjacencyList, source, needle int) []int {
	seen := make([]bool, len(graph))
	path := []int{}

	walk(graph, source, needle, seen, &path)

	if len(path) == 0 {
		return nil
	}

	return path
}

func testDFS() {
	graph := WeightedAdjacencyList{
		{{1, 3}, {2, 1}},
		{{4, 1}},
		{{3, 4}},
		{},
		{{5, 2}},
		{},
	}

	fmt.Printf("Path from 0 to 5: %v | Expected: [0 1 4 5]\n", dfs(graph, 0, 5))
	fmt.Printf("Path from 0 to 6: %v | Expected: [] (nil)\n", dfs(graph, 0, 6))
}

func main() {
	testDFS()
}
