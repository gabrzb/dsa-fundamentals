import assert from "node:assert/strict";
import test from "node:test";
import { bfs } from "./index.ts";

test("adjacency-list BFS matches all-pairs distances on every three-vertex directed graph", () => {
  for (let mask = 0; mask < 1 << 9; mask++) {
    const graph = Array.from({ length: 3 }, (_, u) => [0, 1, 2].filter(v => mask & (1 << (u * 3 + v))));
    const original = graph.map(row => [...row]);
    const distance = Array.from({ length: 3 }, (_, u) => Array.from({ length: 3 }, (_, v) => u === v ? 0 : 4));
    for (let u = 0; u < 3; u++) for (const v of graph[u]) distance[u][v] = Math.min(distance[u][v], 1);
    for (let k = 0; k < 3; k++) for (let u = 0; u < 3; u++) for (let v = 0; v < 3; v++) distance[u][v] = Math.min(distance[u][v], distance[u][k] + distance[k][v]);
    for (let source = 0; source < 3; source++) {
      for (let target = 0; target < 3; target++) {
        const path = bfs(graph, source, target);
        if (distance[source][target] === 4) assert.equal(path, null);
        else {
          assert.ok(path !== null);
          assert.equal(path[0], source);
          assert.equal(path.at(-1), target);
          assert.equal(path.length - 1, distance[source][target]);
          for (let i = 1; i < path.length; i++) assert.ok(graph[path[i - 1]].includes(path[i]));
        }
      }
    }
    assert.deepEqual(graph, original);
  }
});

test("adjacency-list BFS follows neighbor order and handles parallel edges or missing paths", () => {
  const graph = [[2, 1, 2], [3], [3], [4], [], []];
  assert.deepEqual(bfs(graph, 0, 4), [0, 2, 3, 4]);
  assert.deepEqual(bfs(graph, 2, 2), [2]);
  assert.equal(bfs(graph, 0, 5), null);
});

test("adjacency-list BFS rejects invalid indices, including unvisited adjacency entries", () => {
  for (const [graph, source, target] of [[[], 0, 0], [[[]], -1, 0], [[[]], 0, 1], [[[-1]], 0, 0], [[[], [2]], 0, 0], [[[]], NaN, 0], [[[0.5]], 0, 0]] as [number[][], number, number][]) {
    assert.throws(() => bfs(graph, source, target), RangeError);
  }
});
