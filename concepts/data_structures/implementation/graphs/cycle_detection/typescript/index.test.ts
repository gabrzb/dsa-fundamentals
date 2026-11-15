import assert from "node:assert/strict";
import test from "node:test";
import { hasDirectedCycle, hasUndirectedCycle } from "./index.ts";

test("directed cycle detection matches positive-length transitive reachability", () => {
  for (let mask = 0; mask < 1 << 9; mask++) {
    const graph = Array.from({ length: 3 }, (_, u) => [0, 1, 2].filter(v => mask & (1 << (u * 3 + v))));
    const reach = Array.from({ length: 3 }, (_, u) => [0, 1, 2].map(v => graph[u].includes(v)));
    for (let k = 0; k < 3; k++) for (let u = 0; u < 3; u++) for (let v = 0; v < 3; v++) reach[u][v] ||= reach[u][k] && reach[k][v];
    const original = graph.map(row => [...row]);
    assert.equal(hasDirectedCycle(graph), [0, 1, 2].some(v => reach[v][v]));
    assert.deepEqual(graph, original);
  }
});

test("undirected cycle detection matches the forest edge-count criterion", () => {
  const edges: [number, number][] = [];
  for (let u = 0; u < 4; u++) for (let v = u + 1; v < 4; v++) edges.push([u, v]);
  for (let mask = 0; mask < 1 << edges.length; mask++) {
    const graph: number[][] = Array.from({ length: 4 }, () => []);
    const parent = [0, 1, 2, 3];
    function root(v: number): number { while (parent[v] !== v) v = parent[v]; return v; }
    let edgeCount = 0;
    edges.forEach(([u, v], i) => { if (mask & (1 << i)) { graph[u].push(v); graph[v].push(u); parent[root(u)] = root(v); edgeCount++; } });
    const components = new Set([0, 1, 2, 3].map(root)).size;
    const original = graph.map(row => [...row]);
    assert.equal(hasUndirectedCycle(graph), edgeCount > 4 - components);
    assert.deepEqual(graph, original);
  }
});

test("cycle detection distinguishes finished vertices and parent edges, and handles deep chains", () => {
  assert.equal(hasDirectedCycle([[1, 2], [], [1]]), false);
  assert.equal(hasDirectedCycle([[1, 1], []]), false);
  assert.equal(hasDirectedCycle([[], [2], [1]]), true);
  assert.equal(hasUndirectedCycle([[1], [0, 2], [1]]), false);
  assert.equal(hasUndirectedCycle([[1, 1], [0, 0]]), true);
  assert.equal(hasUndirectedCycle([[0]]), true);
  assert.equal(hasDirectedCycle([]), false);
  assert.equal(hasUndirectedCycle([]), false);
  const graph = Array.from({ length: 3000 }, (_, v) => v < 2999 ? [v + 1] : []);
  assert.equal(hasDirectedCycle(graph), false);
  graph.at(-1)!.push(0);
  assert.equal(hasDirectedCycle(graph), true);
  for (const solve of [hasDirectedCycle, hasUndirectedCycle]) assert.throws(() => solve([[-1]]), RangeError);
});
