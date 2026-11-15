import assert from "node:assert/strict";
import test from "node:test";
import { memoized, tabulated } from "./index.ts";

function enumerateSubsets(weights: number[], values: number[], capacity: number): number {
  let result = 0;
  for (let mask = 0; mask < 1 << weights.length; mask++) {
    let weight = 0, value = 0;
    for (let i = 0; i < weights.length; i++) {
      if (mask & (1 << i)) { weight += weights[i]; value += values[i]; }
    }
    if (weight <= capacity) result = Math.max(result, value);
  }
  return result;
}

test("knapsack variants match every subset and preserve their arrays", () => {
  for (let encoded = 0; encoded < 81; encoded++) {
    let state = encoded;
    const weights = Array.from({ length: 4 }, () => { const w = state % 3 + 1; state = Math.floor(state / 3); return w; });
    const values = weights.map((w, i) => i * (w + 1));
    for (let capacity = 0; capacity <= 8; capacity++) {
      for (const solve of [memoized, tabulated]) {
        const original = [[...weights], [...values]];
        assert.equal(solve(weights, values, capacity), enumerateSubsets(weights, values, capacity));
        assert.deepEqual([weights, values], original);
      }
    }
  }
});

test("knapsack never reuses an item and handles empty or infeasible choices", () => {
  for (const solve of [memoized, tabulated]) {
    assert.equal(solve([2, 3, 4], [4, 5, 7], 5), 9);
    assert.equal(solve([2], [3], 4), 3);
    assert.equal(solve([2, 2], [3, 3], 4), 6);
    assert.equal(solve([], [], 5), 0);
    assert.equal(solve([2], [3], 0), 0);
    assert.equal(solve([2], [0], 2), 0);
    assert.equal(solve([5], [8], 3), 0);
  }
});

test("knapsack validates dimensions, domains and total value precision", () => {
  for (const solve of [memoized, tabulated]) {
    for (const [weights, values, capacity] of [[[1], [], 2], [[0], [1], 2], [[1], [-1], 2], [[], [], -1], [[1.5], [2], 3], [[1, 1], [Number.MAX_SAFE_INTEGER, 1], 1]] as [number[], number[], number][]) {
      assert.throws(() => solve(weights, values, capacity), RangeError);
    }
  }
});
