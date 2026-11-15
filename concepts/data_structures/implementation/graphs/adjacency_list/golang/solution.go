package adjacencylist

func ValidateVertex(vertex, size int) {
	if vertex < 0 || vertex >= size {
		panic("vertex must be an index in the graph")
	}
}

func Validate(graph [][]int) {
	for _, neighbors := range graph {
		for _, neighbor := range neighbors {
			ValidateVertex(neighbor, len(graph))
		}
	}
}
