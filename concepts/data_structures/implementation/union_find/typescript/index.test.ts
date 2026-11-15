import assert from "node:assert/strict";
import test from "node:test";
import { UnionFind } from "./index.ts";

test("Union-Find matches explicit component relabeling after every union", () => {
  const sets = new UnionFind(12);
  let labels = Array.from({ length: 12 }, (_, i) => i);
  let state = 12345;
  for (let step = 0; step < 100; step++) {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    const a = (state >>> 8) % 12, b = (state >>> 16) % 12;
    const left = labels[a], right = labels[b];
    assert.equal(sets.union(a, b), left !== right);
    labels = labels.map(label => label === right ? left : label);
    assert.equal(sets.components, new Set(labels).size);
    for (let i = 0; i < 12; i++) {
      assert.equal(sets.componentSize(i), labels.filter(label => label === labels[i]).length);
      for (let j = 0; j < 12; j++) assert.equal(sets.connected(i, j), labels[i] === labels[j]);
    }
  }
});

test("Union-Find compresses the whole path and attaches the smaller component", () => {
  const sets = new UnionFind(9);
  for (const [a, b] of [[0, 1], [2, 3], [0, 2], [4, 5], [6, 7], [4, 6], [0, 4]]) assert.equal(sets.union(a, b), true);
  const parent = (sets as unknown as { parent: number[] }).parent;
  assert.equal(parent[7], 6);
  assert.equal(sets.find(7), 0);
  assert.deepEqual([parent[7], parent[6], parent[4]], [0, 0, 0]);
  assert.equal(sets.union(8, 0), true);
  assert.equal(sets.find(8), 0);
  assert.equal(sets.union(0, 0), false);
  assert.equal(sets.components, 1);
  assert.equal(sets.componentSize(8), 9);
});

test("Union-Find supports an empty universe and rejects invalid sizes or elements", () => {
  assert.equal(new UnionFind(0).components, 0);
  for (const size of [-1, 1.5, NaN]) assert.throws(() => new UnionFind(size), RangeError);
  const sets = new UnionFind(2);
  for (const value of [-1, 2, 0.5, NaN]) assert.throws(() => sets.find(value), RangeError);
  assert.throws(() => sets.union(0, 2), RangeError);
  assert.throws(() => sets.connected(0, 2), RangeError);
  assert.throws(() => sets.componentSize(2), RangeError);
});
