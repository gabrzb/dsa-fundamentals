import assert from "node:assert/strict";
import test from "node:test";
import { BinaryNode } from "../../../bt_base/typescript/binary_tree.ts";
import { post_order_search } from "./bt_post_order.ts";

test("tree traversal visits nodes in order", () => {
  const tree = new BinaryNode(2, new BinaryNode(1), new BinaryNode(3));
  assert.deepEqual(post_order_search(tree), [1, 3, 2]);
  assert.deepEqual(post_order_search(null), []);
});
