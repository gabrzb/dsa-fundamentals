from concepts.data_structures.implementation.graphs.weighted_graph.python.solution import validate_edges
from concepts.data_structures.implementation.union_find.python.solution import UnionFind


def kruskal(vertex_count: int, edges: list[tuple[int, int, int]]) -> list[tuple[int, int, int]]:
    validate_edges(vertex_count, edges)
    sets = UnionFind(vertex_count)
    forest = []
    for source, target, weight in sorted(edges, key=lambda edge: edge[2]):
        if sets.union(source, target):
            forest.append((source, target, weight))
            if sets.components == 1:
                break
    return forest
