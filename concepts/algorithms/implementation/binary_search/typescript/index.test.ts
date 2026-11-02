import assert from "node:assert/strict";
import test from "node:test";
import { binarySearch } from "./index.ts";

test(`${binarySearch.name}: finds boundaries and reports missing elements`, () => {
  assert.equal(binarySearch([], 1), -1);
  assert.equal(binarySearch([1], 1), 0);
  assert.equal(binarySearch([1, 3, 5], 1), 0);
  assert.equal(binarySearch([1, 3, 5], 5), 2);
  assert.equal(binarySearch([1, 3, 5], 2), -1);
});
