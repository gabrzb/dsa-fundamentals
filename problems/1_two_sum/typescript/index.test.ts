import assert from "node:assert/strict";
import test from "node:test";
import { twoSum } from "./index.ts";

test("two sum uses distinct indices and handles missing pairs", () => {
  assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
  assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
  assert.deepEqual(twoSum([-1, 2, 4], 3), [0, 2]);
  assert.deepEqual(twoSum([3], 6), []);
  assert.deepEqual(twoSum([], 1), []);
});
