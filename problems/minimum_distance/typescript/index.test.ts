import assert from "node:assert/strict";
import test from "node:test";
import { getMinDistance } from "./index.ts";

test("minimum distance selects the nearest occurrence", () => {
  assert.equal(getMinDistance([1, 2, 3, 2], 2, 2), 1);
  assert.equal(getMinDistance([1], 1, 0), 0);
});
