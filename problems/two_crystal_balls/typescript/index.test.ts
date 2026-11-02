import assert from "node:assert/strict";
import test from "node:test";
import { twoCrystalBalls } from "./index.ts";

test("crystal balls find every boundary for lengths zero through 39", () => {
  for (let length = 0; length < 40; length++) {
    for (let boundary = 0; boundary <= length; boundary++) {
      const values = Array.from({ length }, (_, index) => index >= boundary);
      assert.equal(twoCrystalBalls(values), boundary < length ? boundary : -1, `${length}/${boundary}`);
    }
  }
});
