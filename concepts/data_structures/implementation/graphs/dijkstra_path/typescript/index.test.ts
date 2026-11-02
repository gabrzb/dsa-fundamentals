import assert from "node:assert/strict";
import test from "node:test";
import { dijkstra_list } from "./index.ts";

test("Dijkstra selects the lowest total weight", () => {
  const graph = [[[1, 4], [2, 1]], [[3, 1]], [[1, 2], [3, 5]], [], []];
  assert.deepEqual(dijkstra_list(0, 3, graph), [0, 2, 1, 3]);
  assert.equal(dijkstra_list(0, 4, graph), null);
  assert.deepEqual(dijkstra_list(2, 2, graph), [2]);
});
