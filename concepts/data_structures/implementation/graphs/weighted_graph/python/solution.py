from concepts.data_structures.implementation.graphs.adjacency_list.python.solution import validate_vertex


def validate_graph(graph: list[list[tuple[int, int]]]) -> None:
    for neighbors in graph:
        for edge in neighbors:
            if len(edge) != 2:
                raise ValueError("an adjacency entry must contain destination and weight")
            destination, weight = edge
            validate_vertex(destination, len(graph))
            if not isinstance(weight, int) or isinstance(weight, bool) or weight < 0:
                raise ValueError("Dijkstra weights must be nonnegative integers")


def validate_edges(vertex_count: int, edges: list[tuple[int, int, int]]) -> None:
    if not isinstance(vertex_count, int) or isinstance(vertex_count, bool) or vertex_count < 0:
        raise ValueError("vertex_count must be a nonnegative integer")
    for edge in edges:
        if len(edge) != 3:
            raise ValueError("an edge must contain two endpoints and a weight")
        source, target, weight = edge
        validate_vertex(source, vertex_count)
        validate_vertex(target, vertex_count)
        if not isinstance(weight, int) or isinstance(weight, bool):
            raise ValueError("edge weights must be integers")
