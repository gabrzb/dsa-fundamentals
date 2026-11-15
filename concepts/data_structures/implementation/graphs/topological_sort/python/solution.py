from collections import deque

from concepts.data_structures.implementation.graphs.adjacency_list.python.solution import validate_graph


def topological_sort(graph: list[list[int]]) -> list[int] | None:
    validate_graph(graph)
    indegree = [0] * len(graph)
    for neighbors in graph:
        for neighbor in neighbors:
            indegree[neighbor] += 1
    queue = deque(vertex for vertex, degree in enumerate(indegree) if degree == 0)
    order = []
    while queue:
        current = queue.popleft()
        order.append(current)
        for neighbor in graph[current]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)
    return order if len(order) == len(graph) else None
