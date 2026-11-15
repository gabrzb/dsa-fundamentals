from heapq import heappop, heappush

from concepts.data_structures.implementation.graphs.weighted_graph.python.solution import validate_edges


def prim(vertex_count: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    validate_edges(vertex_count, edges)
    graph = [[] for _ in range(vertex_count)]
    for source, target, weight in edges:
        graph[source].append((weight, target))
        graph[target].append((weight, source))
    seen = [False] * vertex_count
    forest = []
    for root in range(vertex_count):
        if seen[root]:
            continue
        queue = [(0, root, -1)]
        while queue:
            weight, current, parent = heappop(queue)
            if seen[current]:
                continue
            seen[current] = True
            if parent != -1:
                forest.append((parent, current, weight))
            for edge_weight, neighbor in graph[current]:
                if not seen[neighbor]:
                    heappush(queue, (edge_weight, neighbor, current))
    return forest
