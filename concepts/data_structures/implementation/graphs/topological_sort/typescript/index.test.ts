import assert from "node:assert/strict";
import test from "node:test";
import { topologicalSort } from "./index.ts";

test("topological sort matches exhaustive vertex permutations on every three-vertex graph", () => {
  const orders = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
  for (let mask = 0; mask < 1 << 9; mask++) {
    const graph = Array.from({ length: 3 }, (_, u) => [0, 1, 2].filter(v => mask & (1 << (u * 3 + v))));
    function valid(order: number[]): boolean {
      const rank = new Array<number>(3);
      order.forEach((v, i) => { rank[v] = i; });
      return graph.every((neighbors, u) => neighbors.every(v => rank[u] < rank[v]));
    }
    const possible = orders.some(valid);
    const original = graph.map(row => [...row]);
    const result = topologicalSort(graph);
    if (!possible) assert.equal(result, null);
    else { assert.ok(result !== null); assert.deepEqual([...result].sort(), [0, 1, 2]); assert.ok(valid(result)); }
    assert.deepEqual(graph, original);
  }
});

test("topological sort handles FIFO ties, duplicate edges and failure after a partial order", () => {
  assert.deepEqual(topologicalSort([[1, 2], [3], [3], [4], [], []]), [0, 5, 1, 2, 3, 4]);
  assert.deepEqual(topologicalSort([[1, 1], []]), [0, 1]);
  assert.equal(topologicalSort([[1, 2], [3], [3], [4], [1], []]), null);
  assert.deepEqual(topologicalSort([]), []);
  assert.deepEqual(topologicalSort([[], [], []]), [0, 1, 2]);
  assert.throws(() => topologicalSort([[1]]), RangeError);
});
