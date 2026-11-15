import assert from "node:assert/strict";
import test from "node:test";
import { memoized, tabulated } from "./index.ts";

function shortestCoinPath(coins: number[], amount: number): number {
  const queue: [number, number][] = [[0, 0]];
  const seen = new Set([0]);
  for (let head = 0; head < queue.length; head++) {
    const [total, count] = queue[head];
    if (total === amount) return count;
    for (const coin of coins) {
      const next = total + coin;
      if (next <= amount && !seen.has(next)) {
        seen.add(next);
        queue.push([next, count + 1]);
      }
    }
  }
  return -1;
}

test("coin-change variants match a breadth-first enumeration and preserve inputs", () => {
  for (let mask = 0; mask < 32; mask++) {
    const coins = [1, 2, 3, 4, 5].filter(coin => mask & (1 << (coin - 1)));
    for (let amount = 0; amount < 20; amount++) {
      const original = [...coins];
      const expected = shortestCoinPath(coins, amount);
      for (const solve of [memoized, tabulated]) {
        assert.equal(solve(coins, amount), expected);
        assert.deepEqual(coins, original);
      }
    }
  }
});

test("coin change permits reuse, ignores duplicate denominations and isolates caches", () => {
  for (const solve of [memoized, tabulated]) {
    assert.equal(solve([1, 3, 4], 6), 2);
    assert.equal(solve([2, 2], 4), 2);
    assert.equal(solve([2], 3), -1);
    assert.equal(solve([1], 3), 3);
    assert.equal(solve([], 0), 0);
  }
});

test("coin change rejects invalid amounts and denominations", () => {
  for (const solve of [memoized, tabulated]) {
    for (const [coins, amount] of [[[0], 0], [[-1], 3], [[1], -1], [[1.5], 3], [[1], 2.5], [[NaN], 1], [[1], Number.MAX_SAFE_INTEGER]] as [number[], number][]) {
      assert.throws(() => solve(coins, amount), RangeError);
    }
  }
});
