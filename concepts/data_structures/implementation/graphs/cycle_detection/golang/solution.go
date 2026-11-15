package solution

import adjacencylist "dsa/concepts/data_structures/implementation/graphs/adjacency_list/golang"

func HasDirectedCycle(graph [][]int) bool {
	adjacencylist.Validate(graph)
	color := make([]int, len(graph))
	type frame struct{ vertex, index int }
	for root := range graph {
		if color[root] != 0 {
			continue
		}
		color[root] = 1
		stack := []frame{{root, 0}}
		for len(stack) > 0 {
			top := len(stack) - 1
			current, index := stack[top].vertex, stack[top].index
			if index == len(graph[current]) {
				color[current] = 2
				stack = stack[:top]
				continue
			}
			neighbor := graph[current][index]
			stack[top].index++
			if color[neighbor] == 1 {
				return true
			}
			if color[neighbor] == 0 {
				color[neighbor] = 1
				stack = append(stack, frame{neighbor, 0})
			}
		}
	}
	return false
}

func HasUndirectedCycle(graph [][]int) bool {
	adjacencylist.Validate(graph)
	seen := make([]bool, len(graph))
	type entry struct{ vertex, parent int }
	for root := range graph {
		if seen[root] {
			continue
		}
		seen[root] = true
		queue := []entry{{root, -1}}
		for head := 0; head < len(queue); head++ {
			current, parent := queue[head].vertex, queue[head].parent
			skippedParent := false
			for _, neighbor := range graph[current] {
				if neighbor == parent && !skippedParent {
					skippedParent = true
					continue
				}
				if seen[neighbor] {
					return true
				}
				seen[neighbor] = true
				queue = append(queue, entry{neighbor, current})
			}
		}
	}
	return false
}
