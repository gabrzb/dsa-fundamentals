import assert from "node:assert/strict";
import test from "node:test";
import { nQueens } from "./index.ts";

test("N queens returns unique, nonattacking placements for boards zero through eight", () => {
  const counts = [1, 1, 0, 0, 2, 10, 4, 40, 92];
  for (let n = 0; n < counts.length; n++) {
    const solutions = nQueens(n);
    assert.equal(solutions.length, counts[n]);
    const unique = new Set(solutions.map(solution => JSON.stringify(solution)));
    assert.equal(unique.size, counts[n]);
    for (const placement of solutions) {
      assert.equal(placement.length, n);
      const columns = [...placement].sort((a, b) => a - b);
      assert.deepEqual(columns, Array.from({ length: n }, (_, index) => index));
      assert.equal(new Set(placement.map((column, row) => row + column)).size, n);
      assert.equal(new Set(placement.map((column, row) => row - column)).size, n);
    }
  }
});

test("four queens has two independent solutions", () => {
  const expected = [[1, 3, 0, 2], [2, 0, 3, 1]];
  const result = nQueens(4);
  assert.deepEqual(result, expected);
  result[0][0] = 99;
  assert.deepEqual(result[1], expected[1]);
});

test("N queens rejects invalid board sizes", () => {
  for (const n of [-1, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
    assert.throws(() => nQueens(n), RangeError);
  }
});
