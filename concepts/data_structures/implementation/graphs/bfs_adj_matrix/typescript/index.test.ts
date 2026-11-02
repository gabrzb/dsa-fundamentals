import assert from "node:assert/strict";
import test from "node:test";
import { bfs as treeBfs } from "../../../tree/bt_traversal/breadth_first/typescript/bt_bfs.ts";
import { bfs } from "./index.ts";

test("graph BFS handles connected, disconnected and identical vertices", () => {
  const graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]];
  assert.deepEqual(bfs(graph, 0, 2), [0, 1, 2]);
  assert.equal(bfs(graph, 0, 3), null);
  assert.deepEqual(bfs(graph, 0, 0), [0]);
});
