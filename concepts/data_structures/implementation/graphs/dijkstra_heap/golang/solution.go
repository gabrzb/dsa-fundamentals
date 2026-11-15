package solution

import (
	"container/heap"
	adjacencylist "dsa/concepts/data_structures/implementation/graphs/adjacency_list/golang"
	weightedgraph "dsa/concepts/data_structures/implementation/graphs/weighted_graph/golang"
	"slices"
)

type Result struct {
	Distance int
	Path     []int
}

func Dijkstra(graph [][][]int, source, target int) *Result {
	weightedgraph.ValidateGraph(graph)
	adjacencylist.ValidateVertex(source, len(graph))
	adjacencylist.ValidateVertex(target, len(graph))
	distance, previous := make([]int, len(graph)), make([]int, len(graph))
	reached := make([]bool, len(graph))
	for i := range previous {
		previous[i] = -1
	}
	reached[source] = true
	queue := &weightedgraph.Queue{}
	heap.Push(queue, weightedgraph.Entry{Weight: 0, Vertex: source, From: -1})
	for queue.Len() > 0 {
		entry := heap.Pop(queue).(weightedgraph.Entry)
		cost, current := entry.Weight, entry.Vertex
		if cost != distance[current] {
			continue
		}
		if current == target {
			path := []int{}
			for current != -1 {
				path = append(path, current)
				current = previous[current]
			}
			slices.Reverse(path)
			return &Result{Distance: cost, Path: path}
		}
		for _, edge := range graph[current] {
			neighbor, weight := edge[0], edge[1]
			if weight > int(^uint(0)>>1)-cost {
				panic("candidate path cost must fit int")
			}
			candidate := cost + weight
			if !reached[neighbor] || candidate < distance[neighbor] {
				reached[neighbor] = true
				distance[neighbor] = candidate
				previous[neighbor] = current
				heap.Push(queue, weightedgraph.Entry{Weight: candidate, Vertex: neighbor, From: -1})
			}
		}
	}
	return nil
}
