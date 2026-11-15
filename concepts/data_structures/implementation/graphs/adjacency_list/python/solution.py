def validate_vertex(vertex: int, size: int) -> None:
    if not isinstance(vertex, int) or isinstance(vertex, bool) or not 0 <= vertex < size:
        raise ValueError("vertex must be an integer index in the graph")


def validate_graph(graph: list[list[int]]) -> None:
    for neighbors in graph:
        for neighbor in neighbors:
            validate_vertex(neighbor, len(graph))
