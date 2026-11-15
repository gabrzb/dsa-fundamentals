import assert from "node:assert/strict";
import test from "node:test";
import { permutations } from "./index.ts";

test("permutations use every input value and avoid duplicate arrangements", () => {
  const cases: [number[], number[][]][] = [
    [[], [[]]],
    [[5], [[5]]],
    [[3, 1, 2], [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]],
    [[2, 1, 1], [[1, 1, 2], [1, 2, 1], [2, 1, 1]]],
    [[1, 1], [[1, 1]]],
    [[0, -1], [[-1, 0], [0, -1]]],
  ];
  for (const [values, expected] of cases) {
    const original = [...values];
    assert.deepEqual(permutations(values), expected);
    assert.deepEqual(values, original);
  }
});

test("permutations have independent storage", () => {
  const result = permutations([1, 2]);
  result[0][0] = 99;
  assert.deepEqual(result[1], [2, 1]);
});
