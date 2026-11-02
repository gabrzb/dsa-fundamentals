import assert from "node:assert/strict";
import test from "node:test";
import { BinaryNode } from "../../bt_base/typescript/binary_tree.ts";
import { dfs as treeDfs } from "./index.ts";

test("tree search handles present, missing and empty nodes", () => {
  const tree = new BinaryNode(2, new BinaryNode(1), new BinaryNode(3));
  assert.equal(treeDfs(tree, 1), true);
  assert.equal(treeDfs(tree, 4), false);
  assert.equal(treeDfs(null, 1), false);
});
