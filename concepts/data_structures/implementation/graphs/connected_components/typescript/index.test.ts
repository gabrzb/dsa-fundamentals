import assert from "node:assert/strict";
import test from "node:test";
import { connectedComponents } from "./index.ts";

test("components match pairwise reachability for every four-vertex simple undirected graph", () => {
  const edges: [number, number][] = [];
  for (let u = 0; u < 4; u++) for (let v = u + 1; v < 4; v++) edges.push([u, v]);
  for (let mask = 0; mask < 1 << edges.length; mask++) {
    const graph: number[][] = Array.from({ length: 4 }, () => []);
    const reach = Array.from({ length: 4 }, (_, u) => Array.from({ length: 4 }, (_, v) => u === v));
    edges.forEach(([u, v], i) => { if (mask & (1 << i)) { graph[u].push(v); graph[v].push(u); reach[u][v] = reach[v][u] = true; } });
    for (let k = 0; k < 4; k++) for (let u = 0; u < 4; u++) for (let v = 0; v < 4; v++) reach[u][v] ||= reach[u][k] && reach[k][v];
    const original = graph.map(row => [...row]);
    const labels = new Array<number>(4).fill(-1);
    connectedComponents(graph).forEach((vertices, group) => {
      assert.ok(vertices.length > 0);
      for (const vertex of vertices) { assert.equal(labels[vertex], -1); labels[vertex] = group; }
    });
    assert.equal(labels.includes(-1), false);
    for (let u = 0; u < 4; u++) for (let v = 0; v < 4; v++) assert.equal(labels[u] === labels[v], reach[u][v]);
    assert.deepEqual(graph, original);
  }
});

test("components include isolates and handle empty graphs, self-loops and parallel edges", () => {
  assert.deepEqual(connectedComponents([[1, 2], [0], [0], [4], [3], []]), [[0, 1, 2], [3, 4], [5]]);
  assert.deepEqual(connectedComponents([[0, 1, 1], [0, 0], []]), [[0, 1], [2]]);
  assert.deepEqual(connectedComponents([]), []);
  assert.throws(() => connectedComponents([[1]]), RangeError);
});
