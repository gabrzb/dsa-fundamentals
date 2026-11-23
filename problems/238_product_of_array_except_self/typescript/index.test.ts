import assert from "node:assert/strict";
import test from "node:test";
import { productExceptSelf } from "./index.ts";

test("product of array except self handles zeros, negatives, and duplicates", () => {
  assert.deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
  assert.deepEqual(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
  assert.deepEqual(productExceptSelf([0, 2, 0]), [0, 0, 0]);
  assert.deepEqual(productExceptSelf([-2, 3]), [3, -2]);
  assert.deepEqual(productExceptSelf([2, 2, 3]), [6, 6, 4]);
  assert.deepEqual(productExceptSelf([0, -2, 3]), [-6, 0, 0]);
});
