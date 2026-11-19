import assert from "node:assert/strict";
import test from "node:test";
import { memoized, tabulated } from "./index.ts";

function subsequences(text: string): Set<string> {
  const chars = Array.from(text);
  const result = new Set<string>();
  for (let mask = 0; mask < 1 << chars.length; mask++) result.add(chars.filter((_, i) => mask & (1 << i)).join(""));
  return result;
}

test("LCS variants match explicit subsequence intersections", () => {
  const words: string[] = [];
  for (let length = 0; length <= 4; length++) {
    for (let mask = 0; mask < 1 << length; mask++) words.push(Array.from({ length }, (_, i) => mask & (1 << i) ? "a" : "b").join(""));
  }
  for (const a of words) {
    for (const b of words) {
      const right = subsequences(b);
      const expected = Math.max(...[...subsequences(a)].filter(s => right.has(s)).map(s => s.length));
      for (const solve of [memoized, tabulated]) assert.equal(solve(a, b), expected);
    }
  }
});

test("LCS preserves order, handles duplicates and counts Unicode code points", () => {
  for (const solve of [memoized, tabulated]) {
    for (const [a, b, expected] of [["abcde", "ace", 3], ["abc", "def", 0], ["aaaa", "aa", 2], ["abc", "cba", 1], ["", "abc", 0], ["x😀y😀", "😀😀", 2], ["é", "e\u0301", 0]] as [string, string, number][]) {
      assert.equal(solve(a, b), expected);
    }
  }
});
