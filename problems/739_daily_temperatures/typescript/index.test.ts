import assert from "node:assert/strict";
import test from "node:test";
import { dailyTemperatures } from "./index.ts";

test("daily temperatures matches the official examples", () => {
  assert.deepEqual(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
  assert.deepEqual(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
  assert.deepEqual(dailyTemperatures([30, 60, 90]), [1, 1, 0]);
});

test("daily temperatures resolves multiple days and keeps equal temperatures waiting", () => {
  assert.deepEqual(dailyTemperatures([76, 72, 70, 74]), [0, 2, 1, 0]);
  assert.deepEqual(dailyTemperatures([71, 71, 73, 73]), [2, 1, 0, 0]);
  assert.deepEqual(dailyTemperatures([70]), [0]);
});
