from collections import deque

from concepts.data_structures.implementation.graphs.adjacency_list.python.solution import validate_graph


def has_directed_cycle(graph: list[list[int]]) -> bool:
    validate_graph(graph)
    color = [0] * len(graph)
    for root in range(len(graph)):
        if color[root] != 0:
            continue
        color[root] = 1
        stack = [(root, 0)]
        while stack:
            current, index = stack[-1]
            if index == len(graph[current]):
                color[current] = 2
                stack.pop()
                continue
            neighbor = graph[current][index]
            stack[-1] = (current, index + 1)
            if color[neighbor] == 1:
                return True
            if color[neighbor] == 0:
                color[neighbor] = 1
                stack.append((neighbor, 0))
    return False


def has_undirected_cycle(graph: list[list[int]]) -> bool:
    validate_graph(graph)
    seen = [False] * len(graph)
    for root in range(len(graph)):
        if seen[root]:
            continue
        seen[root] = True
        queue = deque([(root, -1)])
        while queue:
            current, parent = queue.popleft()
            skipped_parent = False
            for neighbor in graph[current]:
                if neighbor == parent and not skipped_parent:
                    skipped_parent = True
                    continue
                if seen[neighbor]:
                    return True
                seen[neighbor] = True
                queue.append((neighbor, current))
    return False
