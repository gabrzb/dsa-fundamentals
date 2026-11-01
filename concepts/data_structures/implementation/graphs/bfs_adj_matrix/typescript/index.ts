declare type WeightedAdjacencyMatrix = number[][];

function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);

  seen[source] = true;
  const q: number[] = [source];

  do {
    const curr = q.shift() as number;
    if (curr === needle) {
      break;
    }

    const adjs = graph[curr];
    for (let i = 0; i < adjs.length; i++) {
      if (adjs[i] === 0) {
        continue;
      }

      if (seen[i]) {
        continue;
      }

      seen[i] = true;
      prev[i] = curr;
      q.push(i);
    }

    seen[curr] = true;
  } while (q.length);

  if (prev[needle] === -1) {
    return null;
  }

  // build it backwards
  let curr = needle;
  const out: number[] = [];

  while (prev[curr] !== -1) {
    out.push(curr);
    curr = prev[curr];
  }

  return [source].concat(out.reverse());
}

function testBfs(): void {
  const graph: WeightedAdjacencyMatrix = [
    [0, 3, 1, 0, 0, 0, 0],
    [3, 0, 0, 4, 0, 0, 0],
    [1, 0, 0, 0, 2, 0, 0],
    [0, 4, 0, 0, 0, 5, 0],
    [0, 0, 2, 0, 0, 6, 0],
    [0, 0, 0, 5, 6, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  console.log(
    `Path from 0 to 5: ${JSON.stringify(bfs(graph, 0, 5))} | Expected: [0,1,3,5]`,
  );
  console.log(
    `Path from 0 to 6: ${JSON.stringify(bfs(graph, 0, 6))} | Expected: null`,
  );
}

testBfs();
