WeightedAdjacencyList = list[list[list[int]]]


def walk(
    graph: WeightedAdjacencyList,
    curr: int,
    needle: int,
    seen: list[bool],
    path: list[int],
) -> bool:
    if seen[curr]:
        return False

    seen[curr] = True

    path.append(curr)

    if curr == needle:
        return True

    for edge in graph[curr]:
        if walk(graph, edge[0], needle, seen, path):
            return True

    path.pop()

    return False


def dfs(graph: WeightedAdjacencyList, source: int, needle: int) -> list[int] | None:
    seen = [False] * len(graph)
    path: list[int] = []

    walk(graph, source, needle, seen, path)

    if not path:
        return None

    return path
