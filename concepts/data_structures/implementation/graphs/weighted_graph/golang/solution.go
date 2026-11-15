package weightedgraph

import adjacencylist "dsa/concepts/data_structures/implementation/graphs/adjacency_list/golang"

func ValidateEdges(vertexCount int, edges [][3]int) {
	if vertexCount < 0 {
		panic("vertex count must be nonnegative")
	}
	for _, edge := range edges {
		adjacencylist.ValidateVertex(edge[0], vertexCount)
		adjacencylist.ValidateVertex(edge[1], vertexCount)
	}
}

func ValidateGraph(graph [][][]int) {
	for _, neighbors := range graph {
		for _, edge := range neighbors {
			if len(edge) != 2 {
				panic("an adjacency entry must contain destination and weight")
			}
			adjacencylist.ValidateVertex(edge[0], len(graph))
			if edge[1] < 0 {
				panic("Dijkstra weights must be nonnegative")
			}
		}
	}
}

type Entry struct{ Weight, Vertex, From int }
type Queue []Entry

func (q Queue) Len() int { return len(q) }
func (q Queue) Less(i, j int) bool {
	a, b := q[i], q[j]
	return a.Weight < b.Weight || a.Weight == b.Weight && (a.Vertex < b.Vertex || a.Vertex == b.Vertex && a.From < b.From)
}
func (q Queue) Swap(i, j int)   { q[i], q[j] = q[j], q[i] }
func (q *Queue) Push(value any) { *q = append(*q, value.(Entry)) }
func (q *Queue) Pop() any {
	last := len(*q) - 1
	value := (*q)[last]
	*q = (*q)[:last]
	return value
}
