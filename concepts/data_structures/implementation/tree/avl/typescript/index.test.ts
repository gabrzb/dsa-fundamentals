import assert from "node:assert/strict";
import test from "node:test";
import { AVLNode, insert, remove } from "./index.ts";

function orders(values: number[]): number[][] {
  if (values.length === 0) return [[]];
  return values.flatMap((value, i) => orders(values.filter((_, j) => i !== j)).map(rest => [value, ...rest]));
}

function checkTree(root: AVLNode | null, expected: Set<number>): void {
  const seen = new Set<AVLNode>();
  const values: number[] = [];
  function visit(node: AVLNode | null, low: number, high: number): number {
    if (node === null) return 0;
    assert.equal(seen.has(node), false);
    seen.add(node);
    assert.ok(low < node.value && node.value < high);
    const left = visit(node.left, low, node.value);
    values.push(node.value);
    const right = visit(node.right, node.value, high);
    assert.ok(Math.abs(left - right) <= 1);
    assert.equal(node.height, 1 + Math.max(left, right));
    return node.height;
  }
  visit(root, -Infinity, Infinity);
  assert.deepEqual(values, [...expected].sort((a, b) => a - b));
}

test("AVL performs LL, RR, LR and RL insertion repairs", () => {
  for (const order of [[30, 20, 10], [10, 20, 30], [30, 10, 20], [10, 30, 20]]) {
    let root: AVLNode | null = null;
    for (const value of order) root = insert(root, value);
    assert.deepEqual([root!.value, root!.left!.value, root!.right!.value], [20, 10, 30]);
    checkTree(root, new Set(order));
  }
});

test("AVL preserves ordering, stored heights and balance in every small mutation order", () => {
  for (const insertion of orders([-2, 0, 1, 3])) {
    for (const deletion of orders(insertion)) {
      let root: AVLNode | null = null;
      const expected = new Set<number>();
      for (const value of insertion) {
        root = insert(root, value);
        expected.add(value);
        checkTree(root, expected);
      }
      assert.equal(insert(root, insertion[0]), root);
      assert.equal(remove(root, 99), root);
      checkTree(root, expected);
      for (const value of deletion) {
        root = remove(root, value);
        expected.delete(value);
        checkTree(root, expected);
      }
      assert.equal(remove(root, 99), null);
    }
  }
});

test("AVL deletion rotates even when the heavy child has balance zero", () => {
  let root: AVLNode | null = null;
  for (const value of [4, 2, 5, 1, 3]) root = insert(root, value);
  root = remove(root, 5);
  assert.equal(root!.value, 2);
  assert.equal(root!.right!.left!.value, 3);
  checkTree(root, new Set([1, 2, 3, 4]));
});

test("AVL survives sorted insertion, mixed updates and complete removal", () => {
  let root: AVLNode | null = null;
  const expected = new Set<number>();
  for (let value = 0; value < 256; value++) {
    root = insert(root, value);
    expected.add(value);
    checkTree(root, expected);
  }
  let state = 12345;
  for (let i = 0; i < 1000; i++) {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    const value = (state >>> 8) % 320;
    if (state & 1) {
      root = insert(root, value);
      expected.add(value);
    } else {
      root = remove(root, value);
      expected.delete(value);
    }
    checkTree(root, expected);
  }
  for (const value of [...expected].sort((a, b) => a - b)) {
    root = remove(root, value);
    expected.delete(value);
    checkTree(root, expected);
  }
  assert.equal(root, null);
});
