import assert from "node:assert/strict";
import test from "node:test";
import { BinaryNode } from "../../bt_base/typescript/binary_tree.ts";
import { compare } from "./index.ts";

test("tree comparison checks values and structure", () => {
  assert.equal(compare(null, null), true);
  assert.equal(compare(new BinaryNode(1), new BinaryNode(1)), true);
  assert.equal(compare(new BinaryNode(1), null), false);
  assert.equal(compare(new BinaryNode(1), new BinaryNode(2)), false);
  assert.equal(compare(new BinaryNode(1, new BinaryNode(2)), new BinaryNode(1, null, new BinaryNode(2))), false);
});
