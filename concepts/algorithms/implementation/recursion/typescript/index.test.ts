import assert from "node:assert/strict";
import test from "node:test";
import { solve } from "./index.ts";

test("maze solver returns a connected path or an empty result", () => {
  assert.deepEqual(solve(["   "], "x", { x: 0, y: 0 }, { x: 2, y: 0 }), [
    { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 },
  ]);
  assert.deepEqual(solve([" x "], "x", { x: 0, y: 0 }, { x: 2, y: 0 }), []);
});
