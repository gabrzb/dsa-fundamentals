import assert from "node:assert/strict";
import test from "node:test";
import { BinaryNode } from "../../bt_base/typescript/binary_tree.ts";
import { dfs } from "../../bt_dfs/typescript/index.ts";
import { in_order_search } from "../../bt_traversal/depth_first/typescript/bt_in_order.ts";
import { insert, remove } from "./index.ts";

function orders(values: number[]): number[][] {
  if (values.length === 0) return [[]];
  return values.flatMap((value, i) => orders(values.filter((_, j) => i !== j)).map(rest => [value, ...rest]));
}

function checkTree(root: BinaryNode<number> | null, expected: Set<number>): void {
  const seen = new Set<BinaryNode<number>>();
  function visit(node: BinaryNode<number> | null, low: number, high: number): void {
    if (node === null) return;
    assert.equal(seen.has(node), false);
    seen.add(node);
    assert.ok(low < node.value && node.value < high);
    visit(node.left, low, node.value);
    visit(node.right, node.value, high);
  }
  visit(root, -Infinity, Infinity);
  assert.deepEqual(in_order_search(root), [...expected].sort((a, b) => a - b));
}

test("BST preserves global ordering through every small insertion and deletion order", () => {
  for (const insertion of orders([-2, 0, 1, 3])) {
    for (const deletion of orders(insertion)) {
      let root: BinaryNode<number> | null = null;
      const expected = new Set<number>();
      for (const value of insertion) {
        root = insert(root, value);
        expected.add(value);
        checkTree(root, expected);
        assert.equal(dfs(root, value), true);
      }
      assert.equal(insert(root, insertion[0]), root);
      assert.equal(remove(root, 99), root);
      checkTree(root, expected);
      for (const value of deletion) {
        root = remove(root, value);
        expected.delete(value);
        checkTree(root, expected);
        assert.equal(dfs(root, value), false);
      }
      assert.equal(root, null);
      assert.equal(remove(root, 99), null);
    }
  }
});

test("BST promotes the successor's right child and returns a replacement root", () => {
  let root: BinaryNode<number> | null = null;
  for (const value of [8, 3, 12, 10, 14, 11]) root = insert(root, value);
  root = remove(root, 8);
  assert.equal(root!.value, 10);
  assert.equal(root!.right!.left!.value, 11);
  checkTree(root, new Set([3, 10, 11, 12, 14]));
  root = insert(insert(null, 2), 1);
  assert.equal(remove(root, 2), root.left);
});
