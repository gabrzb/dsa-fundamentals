import assert from "node:assert/strict";
import test from "node:test";
import { bfs } from "../../concepts/data_structures/implementation/graphs/bfs_adj_matrix/typescript/index.ts";
import { dfs } from "../../concepts/data_structures/implementation/graphs/dfs_adj_list/typescript/index.ts";
import { dijkstra_list } from "../../concepts/data_structures/implementation/graphs/dijkstra_path/typescript/index.ts";
import { BinaryNode } from "../../concepts/data_structures/implementation/tree/bt_base/typescript/binary_tree.ts";
import { compare } from "../../concepts/data_structures/implementation/tree/bt_comparison/typescript/index.ts";
import { dfs as treeDfs } from "../../concepts/data_structures/implementation/tree/bt_dfs/typescript/index.ts";
import { bfs as treeBfs } from "../../concepts/data_structures/implementation/tree/bt_traversal/breadth_first/typescript/bt_bfs.ts";
import { in_order_search } from "../../concepts/data_structures/implementation/tree/bt_traversal/depth_first/typescript/bt_in_order.ts";
import { pre_order_search } from "../../concepts/data_structures/implementation/tree/bt_traversal/depth_first/typescript/bt_pre_order.ts";
import { post_order_search } from "../../concepts/data_structures/implementation/tree/bt_traversal/depth_first/typescript/bt_post_order.ts";

test("graph BFS handles connected, disconnected and identical vertices", () => {
  const graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]];
  assert.deepEqual(bfs(graph, 0, 2), [0, 1, 2]);
  assert.equal(bfs(graph, 0, 3), null);
  assert.deepEqual(bfs(graph, 0, 0), [0]);
});

test("graph DFS handles cycles and missing paths", () => {
  const graph = [[[1, 1]], [[0, 1], [2, 1]], [], []];
  assert.deepEqual(dfs(graph, 0, 2), [0, 1, 2]);
  assert.equal(dfs(graph, 0, 3), null);
  assert.deepEqual(dfs(graph, 0, 0), [0]);
});

test("Dijkstra selects the lowest total weight", () => {
  const graph = [[[1, 4], [2, 1]], [[3, 1]], [[1, 2], [3, 5]], [], []];
  assert.deepEqual(dijkstra_list(0, 3, graph), [0, 2, 1, 3]);
  assert.equal(dijkstra_list(0, 4, graph), null);
  assert.deepEqual(dijkstra_list(2, 2, graph), [2]);
});

test("tree traversals visit nodes in the specified order", () => {
  const tree = new BinaryNode(2, new BinaryNode(1), new BinaryNode(3));
  assert.deepEqual(in_order_search(tree), [1, 2, 3]);
  assert.deepEqual(pre_order_search(tree), [2, 1, 3]);
  assert.deepEqual(post_order_search(tree), [1, 3, 2]);
  assert.deepEqual(in_order_search(null), []);
  assert.deepEqual(pre_order_search(null), []);
  assert.deepEqual(post_order_search(null), []);
  for (const search of [treeDfs, treeBfs]) {
    assert.equal(search(tree, 1), true);
    assert.equal(search(tree, 4), false);
    assert.equal(search(null, 1), false);
  }
});

test("tree comparison checks values and structure", () => {
  assert.equal(compare(null, null), true);
  assert.equal(compare(new BinaryNode(1), new BinaryNode(1)), true);
  assert.equal(compare(new BinaryNode(1), null), false);
  assert.equal(compare(new BinaryNode(1), new BinaryNode(2)), false);
  assert.equal(compare(new BinaryNode(1, new BinaryNode(2)), new BinaryNode(1, null, new BinaryNode(2))), false);
});
