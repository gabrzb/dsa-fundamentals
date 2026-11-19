import assert from "node:assert/strict";
import test from "node:test";
import { Solution as Consecutive } from "./index.ts";

test("consecutive sequences handle duplicates and negative numbers", () => {
  const solution = new Consecutive();
  assert.equal(solution.longestConsecutive([]), 0);
  assert.equal(solution.longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
  assert.equal(solution.longestConsecutive([1, 2, 0, 1]), 3);
  assert.equal(solution.longestConsecutive([-2, -1, 0]), 3);
});
