type WeightedAdjacencyList = number[][][];

function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]) : boolean {
  if (seen[curr]) {
    return false;
  }

  seen[curr] = true;
  
  // pre
  path.push(curr);

  if (curr === needle) {
    return true;
  }

  // recurse
  const list = graph[curr];

  for (let i = 0; i < list.length; i++) {
    const edge = list[i];
    if (walk(graph, edge[0], needle, seen, path)) {
      return true;
    }
  }

  // post
  path.pop();

  return false;
}

function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
  const seen: boolean[] = new Array(graph.length).fill(false);
  const path: number[] = [];

  walk(graph, source, needle, seen, path);

  if (path.length === 0) {
    return null;
  }

  return path;
}

function testDFS() {
  const graph: WeightedAdjacencyList = [
    [[1, 3], [2, 1]],
    [[4, 1]],
    [[3, 4]],
    [],
    [[5, 2]],
    [],
  ];

  console.log(`Path from 0 to 5: ${JSON.stringify(dfs(graph, 0, 5))} | Expected: [0,1,4,5]`);
  console.log(`Path from 0 to 6: ${JSON.stringify(dfs(graph, 0, 6))} | Expected: null`);
}

testDFS();