package solution

import (
	"container/heap"
	weightedgraph "dsa/concepts/data_structures/implementation/graphs/weighted_graph/golang"
)

func Prim(vertexCount int, edges [][3]int) [][3]int {
	weightedgraph.ValidateEdges(vertexCount, edges)
	type neighbor struct{ vertex, weight int }
	graph := make([][]neighbor, vertexCount)
	for _, edge := range edges {
		source, target, weight := edge[0], edge[1], edge[2]
		graph[source] = append(graph[source], neighbor{target, weight})
		graph[target] = append(graph[target], neighbor{source, weight})
	}
	seen := make([]bool, vertexCount)
	forest := make([][3]int, 0)
	for root := range vertexCount {
		if seen[root] {
			continue
		}
		queue := &weightedgraph.Queue{}
		heap.Push(queue, weightedgraph.Entry{Weight: 0, Vertex: root, From: -1})
		for queue.Len() > 0 {
			entry := heap.Pop(queue).(weightedgraph.Entry)
			if seen[entry.Vertex] {
				continue
			}
			seen[entry.Vertex] = true
			if entry.From != -1 {
				forest = append(forest, [3]int{entry.From, entry.Vertex, entry.Weight})
			}
			for _, edge := range graph[entry.Vertex] {
				if !seen[edge.vertex] {
					heap.Push(queue, weightedgraph.Entry{Weight: edge.weight, Vertex: edge.vertex, From: entry.Vertex})
				}
			}
		}
	}
	return forest
}
