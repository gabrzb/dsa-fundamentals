package solution

import adjacencylist "dsa/concepts/data_structures/implementation/graphs/adjacency_list/golang"

func TopologicalSort(graph [][]int) []int {
	adjacencylist.Validate(graph)
	indegree := make([]int, len(graph))
	for _, neighbors := range graph {
		for _, neighbor := range neighbors {
			indegree[neighbor]++
		}
	}
	order := make([]int, 0, len(graph))
	for vertex, degree := range indegree {
		if degree == 0 {
			order = append(order, vertex)
		}
	}
	for head := 0; head < len(order); head++ {
		for _, neighbor := range graph[order[head]] {
			indegree[neighbor]--
			if indegree[neighbor] == 0 {
				order = append(order, neighbor)
			}
		}
	}
	if len(order) != len(graph) {
		return nil
	}
	return order
}
