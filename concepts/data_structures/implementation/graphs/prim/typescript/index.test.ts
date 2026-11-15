import assert from "node:assert/strict";
import test from "node:test";
import { prim } from "./index.ts";
import type { Edge } from "../../weighted_graph/typescript/index.ts";

function reachability(size: number, edges: readonly Edge[]): boolean[][] {
  const reach = Array.from({ length: size }, (_, u) => Array.from({ length: size }, (_, v) => u === v));
  for (const [u, v] of edges) reach[u][v] = reach[v][u] = true;
  for (let k = 0; k < size; k++) for (let u = 0; u < size; u++) for (let v = 0; v < size; v++) reach[u][v] ||= reach[u][k] && reach[k][v];
  return reach;
}

function checkForest(size: number, edges: Edge[]): void {
  const expected = reachability(size, edges);
  const components = Array.from({ length: size }, (_, v) => !expected[v].slice(0, v).some(Boolean)).filter(Boolean).length;
  const required = size - components;
  let optimum = Infinity;
  for (let mask = 0; mask < 1 << edges.length; mask++) {
    const chosen = edges.filter((_, i) => mask & (1 << i));
    if (chosen.length !== required) continue;
    if (JSON.stringify(reachability(size, chosen)) === JSON.stringify(expected)) optimum = Math.min(optimum, chosen.reduce((sum, e) => sum + e[2], 0));
  }
  const original = edges.map(e => [...e]);
  const forest = prim(size, edges);
  assert.equal(forest.length, required);
  assert.deepEqual(reachability(size, forest), expected);
  assert.equal(forest.reduce((sum, e) => sum + e[2], 0), optimum);
  const key = (e: Edge): string => [Math.min(e[0], e[1]), Math.max(e[0], e[1]), e[2]].join(",");
  const available = new Map<string, number>();
  for (const e of edges) available.set(key(e), (available.get(key(e)) ?? 0) + 1);
  for (const e of forest) {
    assert.ok((available.get(key(e)) ?? 0) > 0);
    available.set(key(e), available.get(key(e))! - 1);
  }
  assert.deepEqual(edges, original);
  if (forest.length) forest[0][2]++;
  assert.deepEqual(edges, original);
}

test("prim matches enumeration of all possible spanning forests on four vertices", () => {
  const possible: Edge[] = [];
  for (let u = 0; u < 4; u++) for (let v = u + 1; v < 4; v++) possible.push([u, v, possible.length - 2]);
  for (let mask = 0; mask < 1 << possible.length; mask++) checkForest(4, possible.filter((_, i) => mask & (1 << i)));
});

test("prim handles isolated vertices, parallel edges, self-loops, negative weights and ties", () => {
  checkForest(0, []);
  checkForest(4, []);
  checkForest(5, [[0, 1, 4], [0, 1, -2], [1, 1, -100], [1, 2, 0]]);
  checkForest(4, [[0, 1, 1], [1, 2, 1], [2, 3, 1], [3, 0, 1], [0, 2, 1]]);
  checkForest(4, [[0, 1, 4], [0, 2, 1], [2, 1, 2], [1, 3, 1], [2, 3, 5]]);
});

test("prim validates vertex counts, endpoints, weight precision and edge shape", () => {
  for (const [size, edges] of [[-1, []], [0, [[0, 0, 1]]], [2, [[0, 2, 1]]], [2, [[-1, 1, 1]]], [2, [[0, 1, 1.5]]], [2, [[0, 1, NaN]]], [2, [[0, 1]]]] as unknown as [number, Edge[]][]) {
    assert.throws(() => prim(size, edges), RangeError);
  }
});
