from heapq import heappop, heappush

from concepts.data_structures.implementation.graphs.adjacency_list.python.solution import validate_vertex
from concepts.data_structures.implementation.graphs.weighted_graph.python.solution import validate_graph


def dijkstra(graph: list[list[tuple[int, int]]], source: int, target: int) -> tuple[int, list[int]] | None:
    validate_graph(graph)
    validate_vertex(source, len(graph))
    validate_vertex(target, len(graph))
    distance = [None] * len(graph)
    previous = [-1] * len(graph)
    distance[source] = 0
    queue = [(0, source)]
    while queue:
        cost, current = heappop(queue)
        if cost != distance[current]:
            continue
        if current == target:
            path = []
            while current != -1:
                path.append(current)
                current = previous[current]
            path.reverse()
            return cost, path
        for neighbor, weight in graph[current]:
            candidate = cost + weight
            if distance[neighbor] is None or candidate < distance[neighbor]:
                distance[neighbor] = candidate
                previous[neighbor] = current
                heappush(queue, (candidate, neighbor))
    return None
