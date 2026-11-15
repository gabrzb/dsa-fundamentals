import assert from "node:assert/strict";
import test from "node:test";
import { memoized, tabulated } from "./index.ts";

function choose(n: number, k: number): number {
  let result = 1;
  for (let i = 1; i <= k; i++) result = result * (n - i + 1) / i;
  return Math.round(result);
}

test("stairs counts match placements of two-step moves throughout the supported range", () => {
  for (let n = 0; n <= 45; n++) {
    let expected = 0;
    for (let twos = 0; twos <= Math.floor(n / 2); twos++) expected += choose(n - twos, twos);
    for (const solve of [memoized, tabulated]) assert.equal(solve(n), expected);
  }
  assert.equal(memoized(45), 1836311903);
});

test("stairs rejects out-of-range and noninteger sizes", () => {
  for (const solve of [memoized, tabulated]) {
    for (const n of [-1, 46, 1.5, NaN, Infinity]) assert.throws(() => solve(n), RangeError);
  }
});
