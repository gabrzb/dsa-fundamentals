from collections import deque

from concepts.data_structures.implementation.graphs.adjacency_list.python.solution import validate_graph


def connected_components(graph: list[list[int]]) -> list[list[int]]:
    validate_graph(graph)
    seen = [False] * len(graph)
    components = []
    for root in range(len(graph)):
        if seen[root]:
            continue
        seen[root] = True
        queue = deque([root])
        component = []
        while queue:
            current = queue.popleft()
            component.append(current)
            for neighbor in graph[current]:
                if not seen[neighbor]:
                    seen[neighbor] = True
                    queue.append(neighbor)
        components.append(component)
    return components
