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


    curr = needle
    path = []

    while prev[curr] != -1:
        path.append(curr)
        curr = prev[curr]

    path.reverse()

    return [source] + path
