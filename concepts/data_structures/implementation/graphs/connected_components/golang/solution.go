package solution

import adjacencylist "dsa/concepts/data_structures/implementation/graphs/adjacency_list/golang"

func ConnectedComponents(graph [][]int) [][]int {
	adjacencylist.Validate(graph)
	seen := make([]bool, len(graph))
	components := make([][]int, 0)
	for root := range graph {
		if seen[root] {
			continue
		}
		seen[root] = true
		component := []int{root}
		for head := 0; head < len(component); head++ {
			for _, neighbor := range graph[component[head]] {
				if !seen[neighbor] {
					seen[neighbor] = true
					component = append(component, neighbor)
				}
			}
		}
		components = append(components, component)
	}
	return components
}
