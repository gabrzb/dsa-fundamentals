import assert from "node:assert/strict";
import test from "node:test";
import { searchInsertPosition } from "./index.ts";

test("insert position handles boundaries and empty arrays", () => {
  assert.equal(searchInsertPosition([], 2), 0);
  assert.equal(searchInsertPosition([1, 3, 5], 0), 0);
  assert.equal(searchInsertPosition([1, 3, 5], 2), 1);
  assert.equal(searchInsertPosition([1, 3, 5], 5), 2);
  assert.equal(searchInsertPosition([1, 3, 5], 7), 3);
});
