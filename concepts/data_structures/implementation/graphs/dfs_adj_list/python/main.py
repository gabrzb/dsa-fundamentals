WeightedAdjacencyList = list[list[list[int]]]

def walk(graph: WeightedAdjacencyList, curr: int, needle: int, seen: list[bool], path: list[int]) -> bool:
    if seen[curr]:
        return False

    seen[curr] = True

    # pre
    path.append(curr)

    if curr == needle:
        return True

    # recurse
    for edge in graph[curr]:
        if walk(graph, edge[0], needle, seen, path):
            return True

    # post
    path.pop()

    return False


def dfs(graph: WeightedAdjacencyList, source: int, needle: int) -> list[int] | None:
    seen = [False] * len(graph)
    path: list[int] = []

    walk(graph, source, needle, seen, path)

    if not path:
        return None

    return path


def test_dfs():
    graph: WeightedAdjacencyList = [
        [[1, 3], [2, 1]],
        [[4, 1]],
        [[3, 4]],
        [],
        [[5, 2]],
        [],
    ]

    print(f"Path from 0 to 5: {dfs(graph, 0, 5)} | Expected: [0, 1, 4, 5]")
    print(f"Path from 0 to 6: {dfs(graph, 0, 6)} | Expected: None")


test_dfs()
