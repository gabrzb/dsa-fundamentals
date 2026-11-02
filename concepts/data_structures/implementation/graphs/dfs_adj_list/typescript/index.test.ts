import assert from "node:assert/strict";
import test from "node:test";
import { dfs as treeDfs } from "../../../tree/bt_dfs/typescript/index.ts";
import { dfs } from "./index.ts";

test("graph DFS handles cycles and missing paths", () => {
  const graph = [[[1, 1]], [[0, 1], [2, 1]], [], []];
  assert.deepEqual(dfs(graph, 0, 2), [0, 1, 2]);
  assert.equal(dfs(graph, 0, 3), null);
  assert.deepEqual(dfs(graph, 0, 0), [0]);
});
