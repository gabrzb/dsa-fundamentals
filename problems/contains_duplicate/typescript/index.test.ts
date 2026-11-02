import assert from "node:assert/strict";
import test from "node:test";
import { containsDuplicate } from "./index.ts";

test("duplicate detection handles empty and repeated values", () => {
  assert.equal(containsDuplicate([]), false);
  assert.equal(containsDuplicate([1, 2, 3]), false);
  assert.equal(containsDuplicate([1, 2, 1]), true);
});
