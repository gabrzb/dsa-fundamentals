from collections import deque

WeightedAdjacencyMatrix = list[list[int]]

def bfs(
    graph: WeightedAdjacencyMatrix,
    source: int,
    needle: int,
) -> list[int] | None:
    seen = [False] * len(graph)
    prev = [-1] * len(graph)

    seen[source] = True
    queue = deque([source])

    while queue:
        curr = queue.popleft()

        if curr == needle:
            break

        for i, weight in enumerate(graph[curr]):
            if weight == 0 or seen[i]:
                continue

            seen[i] = True
            prev[i] = curr
            queue.append(i)

    if prev[needle] == -1:
        return None

    # build the path backwards
    curr = needle
    path = []

    while prev[curr] != -1:
        path.append(curr)
        curr = prev[curr]

    path.reverse()

    return [source] + path


def test_bfs():
    graph: WeightedAdjacencyMatrix = [
        [0, 3, 1, 0, 0, 0, 0],
        [3, 0, 0, 4, 0, 0, 0],
        [1, 0, 0, 0, 2, 0, 0],
        [0, 4, 0, 0, 0, 5, 0],
        [0, 0, 2, 0, 0, 6, 0],
        [0, 0, 0, 5, 6, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ]

    print(f"Path from 0 to 5: {bfs(graph, 0, 5)} | Expected: [0, 1, 3, 5]")
    print(f"Path from 0 to 6: {bfs(graph, 0, 6)} | Expected: None")

test_bfs()
