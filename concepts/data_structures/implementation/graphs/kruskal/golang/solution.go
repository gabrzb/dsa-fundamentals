package solution

import (
	weightedgraph "dsa/concepts/data_structures/implementation/graphs/weighted_graph/golang"
	unionfind "dsa/concepts/data_structures/implementation/union_find/golang"
	"sort"
)

func Kruskal(vertexCount int, edges [][3]int) [][3]int {
	weightedgraph.ValidateEdges(vertexCount, edges)
	sets := unionfind.New(vertexCount)
	forest := make([][3]int, 0)
	type indexedEdge struct {
		edge  [3]int
		index int
	}
	ordered := make([]indexedEdge, len(edges))
	for i, edge := range edges {
		ordered[i] = indexedEdge{edge, i}
	}
	sort.Slice(ordered, func(i, j int) bool {
		return ordered[i].edge[2] < ordered[j].edge[2] || ordered[i].edge[2] == ordered[j].edge[2] && ordered[i].index < ordered[j].index
	})
	for _, entry := range ordered {
		edge := entry.edge
		if sets.Union(edge[0], edge[1]) {
			forest = append(forest, edge)
			if sets.Count() == 1 {
				break
			}
		}
	}
	return forest
}
