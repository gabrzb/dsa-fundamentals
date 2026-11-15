import assert from "node:assert/strict";
import test from "node:test";
import { dijkstra } from "./index.ts";

test("heap Dijkstra matches all-pairs shortest distances on every three-vertex directed graph", () => {
  for (let mask = 0; mask < 1 << 9; mask++) {
    const graph = Array.from({ length: 3 }, (_, u) => [0, 1, 2].filter(v => mask & (1 << (u * 3 + v))).map(v => [v, (u * 3 + v) % 4]));
    const original = JSON.stringify(graph);
    const distance = Array.from({ length: 3 }, (_, u) => Array.from({ length: 3 }, (_, v) => u === v ? 0 : Infinity));
    for (let u = 0; u < 3; u++) for (const [v, weight] of graph[u]) distance[u][v] = Math.min(distance[u][v], weight);
    for (let k = 0; k < 3; k++) for (let u = 0; u < 3; u++) for (let v = 0; v < 3; v++) distance[u][v] = Math.min(distance[u][v], distance[u][k] + distance[k][v]);
    for (let source = 0; source < 3; source++) for (let target = 0; target < 3; target++) {
      const result = dijkstra(graph, source, target);
      if (distance[source][target] === Infinity) assert.equal(result, null);
      else {
        assert.ok(result !== null);
        assert.equal(result.distance, distance[source][target]);
        assert.equal(result.path[0], source);
        assert.equal(result.path.at(-1), target);
        assert.equal(result.path.length, new Set(result.path).size);
        let cost = 0;
        for (let i = 1; i < result.path.length; i++) cost += Math.min(...graph[result.path[i - 1]].filter(edge => edge[0] === result.path[i]).map(edge => edge[1]));
        assert.equal(cost, result.distance);
      }
    }
    assert.equal(JSON.stringify(graph), original);
  }
});

test("heap Dijkstra handles stale entries, parallel edges, zero cycles and maximum safe costs", () => {
  const graph = [[[1, 4], [2, 1]], [[3, 1]], [[1, 2], [3, 5]], [], []];
  assert.deepEqual(dijkstra(graph, 0, 3), { distance: 4, path: [0, 2, 1, 3] });
  assert.equal(dijkstra(graph, 0, 4), null);
  assert.deepEqual(dijkstra([[[1, 9], [1, 0]], [[0, 0]]], 0, 1), { distance: 0, path: [0, 1] });
  assert.deepEqual(dijkstra([[]], 0, 0), { distance: 0, path: [0] });
  assert.equal(dijkstra([[[1, Number.MAX_SAFE_INTEGER]], []], 0, 1)!.distance, Number.MAX_SAFE_INTEGER);
  assert.throws(() => dijkstra([[[1, Number.MAX_SAFE_INTEGER]], [[2, 1]], []], 0, 2), RangeError);
});

test("heap Dijkstra validates all edges before an early return", () => {
  for (const [graph, source, target] of [[[], 0, 0], [[[]], -1, 0], [[[]], 0, 1], [[[[1, 0]]], 0, 0], [[[[0, -1]]], 0, 0], [[[[0, 1.5]]], 0, 0], [[[[0, NaN]]], 0, 0], [[[[0]]], 0, 0]] as [number[][][], number, number][]) {
    assert.throws(() => dijkstra(graph, source, target), RangeError);
  }
});
