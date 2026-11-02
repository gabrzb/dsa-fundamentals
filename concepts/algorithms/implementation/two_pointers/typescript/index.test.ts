import assert from "node:assert/strict";
import test from "node:test";
import { reverseArray } from "./index.ts";

test("two pointers reverse arrays in place and restore them when applied twice", () => {
  for (const values of [[], [1], [1, 2, 3, 4], [-1, 0, 2], [1, 2, 1, 2]]) {
    const result = [...values];
    assert.equal(reverseArray(result), undefined);
    assert.deepEqual(result, [...values].reverse());
    reverseArray(result);
    assert.deepEqual(result, values);
  }
});
