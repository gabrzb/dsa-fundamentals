WeightedAdjacencyList = list[list[list[int]]]


def has_unvisited(seen: list[bool], dists: list[float]) -> bool:
    return any(
        not is_seen and dists[i] < float("inf") for i, is_seen in enumerate(seen)
    )


def get_lowest_unvisited(seen: list[bool], dists: list[float]) -> int:
    idx = -1
    lowest_distance = float("inf")

    for i, is_seen in enumerate(seen):
        if is_seen:
            continue

        if lowest_distance > dists[i]:
            lowest_distance = dists[i]
            idx = i

    return idx


def dijkstra_list(
    source: int,
    sink: int,
    graph: WeightedAdjacencyList,
) -> list[int] | None:
    seen = [False] * len(graph)
    prev = [-1] * len(graph)
    dists = [float("inf")] * len(graph)

    dists[source] = 0

    while has_unvisited(seen, dists):
        curr = get_lowest_unvisited(seen, dists)
        seen[curr] = True

        for edge in graph[curr]:
            to, weight = edge
            if seen[to]:
                continue

            dist = dists[curr] + weight
            if dist < dists[to]:
                dists[to] = dist
                prev[to] = curr

    if dists[sink] == float("inf"):
        return None

    out: list[int] = []
    curr = sink

    while prev[curr] != -1:
        out.append(curr)
        curr = prev[curr]

    out.append(source)
    out.reverse()

    return out
