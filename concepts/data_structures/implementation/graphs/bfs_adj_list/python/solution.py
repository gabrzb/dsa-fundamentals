from collections import deque

from concepts.data_structures.implementation.graphs.adjacency_list.python.solution import (
    validate_graph,
    validate_vertex,
)


def bfs(graph: list[list[int]], source: int, target: int) -> list[int] | None:
    validate_graph(graph)
    validate_vertex(source, len(graph))
    validate_vertex(target, len(graph))
    seen = [False] * len(graph)
    previous = [-1] * len(graph)
    seen[source] = True
    queue = deque([source])

    while queue:
        current = queue.popleft()
        if current == target:
            path = []
            while current != -1:
                path.append(current)
                current = previous[current]
            path.reverse()
            return path
        for neighbor in graph[current]:
            if not seen[neighbor]:
                seen[neighbor] = True
                previous[neighbor] = current
                queue.append(neighbor)
    return None
