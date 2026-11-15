import assert from "node:assert/strict";
import test from "node:test";
import { subsets } from "./index.ts";

test("subsets include the empty set and avoid duplicate results", () => {
  const cases: [number[], number[][]][] = [
    [[], [[]]],
    [[1], [[], [1]]],
    [[2, 1], [[], [1], [1, 2], [2]]],
    [[2, 1, 2], [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]],
    [[-1, 0], [[], [-1], [-1, 0], [0]]],
  ];
  for (const [values, expected] of cases) {
    const original = [...values];
    assert.deepEqual(subsets(values), expected);
    assert.deepEqual(values, original);
  }
});

test("subsets have independent storage", () => {
  const result = subsets([1, 2]);
  result[2][0] = 99;
  assert.deepEqual(result[1], [1]);
  assert.deepEqual(result[3], [2]);
});
