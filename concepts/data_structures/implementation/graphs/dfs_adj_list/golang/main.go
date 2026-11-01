package solution

type WeightedAdjacencyList [][][]int

func walk(graph WeightedAdjacencyList, curr, needle int, seen []bool, path *[]int) bool {
	if seen[curr] {
		return false
	}

	seen[curr] = true

	*path = append(*path, curr)

	if curr == needle {
		return true
	}

	for _, edge := range graph[curr] {
		if walk(graph, edge[0], needle, seen, path) {
			return true
		}
	}

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
