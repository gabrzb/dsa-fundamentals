type WeightedAdjacencyList = number[][][];

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
  return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
  let idx = -1;
  let lowestDistance = Infinity;

  for (let i = 0; i < seen.length; ++i) {
    if (seen[i]) {
      continue;
    }

    if (lowestDistance > dists[i]) {
      lowestDistance = dists[i];
      idx = i;
    }
  }

  return idx;
}

function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] | null {
  const seen: boolean[] = new Array(arr.length).fill(false);
  const prev: number[] = new Array(arr.length).fill(-1);
  const dists: number[] = new Array(arr.length).fill(Infinity);

  dists[source] = 0;

  while (hasUnvisited(seen, dists)) {
    const curr = getLowestUnvisited(seen, dists);
    seen[curr] = true;

    const adjs = arr[curr];
    for (let i = 0; i < adjs.length; ++i) {
      const edge = adjs[i];
      if (seen[edge[0]]) {
        continue;
      }

      const dist = dists[curr] + edge[1];
      if (dist < dists[edge[0]]) {
        dists[edge[0]] = dist;
        prev[edge[0]] = curr;
      }
    }
  }

  if (dists[sink] === Infinity) {
    return null;
  }

  const out: number[] = [];
  let curr = sink;

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  out.push(source);
  out.reverse();

  return out;
}

function testDijkstraList(): void {
  const graph: WeightedAdjacencyList = [
    [
      [1, 4],
      [2, 1],
    ],
    [[3, 1]],
    [
      [1, 2],
      [3, 5],
      [4, 10],
    ],
    [[4, 3]],
    [],
    [],
  ];

  console.log(
    `Path from 0 to 4: ${JSON.stringify(dijkstra_list(0, 4, graph))} | Expected: [0,2,1,3,4]`,
  );
  console.log(
    `Path from 0 to 5: ${JSON.stringify(dijkstra_list(0, 5, graph))} | Expected: null`,
  );
  console.log(
    `Path from 2 to 2: ${JSON.stringify(dijkstra_list(2, 2, graph))} | Expected: [2]`,
  );
}

testDijkstraList();