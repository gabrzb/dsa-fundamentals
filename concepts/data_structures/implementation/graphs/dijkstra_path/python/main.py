WeightedAdjacencyList = list[list[list[int]]]

def has_unvisited(seen: list[bool], dists: list[float]) -> bool:
    return any(not is_seen and dists[i] < float("inf") for i, is_seen in enumerate(seen))


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


def test_dijkstra_list():
    graph: WeightedAdjacencyList = [
        [[1, 4], [2, 1]],
        [[3, 1]],
        [[1, 2], [3, 5], [4, 10]],
        [[4, 3]],
        [],
        [],
    ]

    print(f"Path from 0 to 4: {dijkstra_list(0, 4, graph)} | Expected: [0, 2, 1, 3, 4]")
    print(f"Path from 0 to 5: {dijkstra_list(0, 5, graph)} | Expected: None")
    print(f"Path from 2 to 2: {dijkstra_list(2, 2, graph)} | Expected: [2]")

test_dijkstra_list()