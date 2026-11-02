import assert from "node:assert/strict";
import test from "node:test";
import { LRU } from "./index.ts";

test("LRU refreshes reads and updates before eviction", () => {
  const cache = new LRU<string, number>(2);
  cache.update("a", 1);
  cache.update("b", 2);
  assert.equal(cache.get("a"), 1);
  cache.update("c", 3);
  assert.equal(cache.get("b"), undefined);
  cache.update("a", 10);
  cache.update("d", 4);
  assert.equal(cache.get("c"), undefined);
  assert.equal(cache.get("a"), 10);
});

test("LRU rejects invalid capacities", () => {
  for (const capacity of [0, -1, 1.5, NaN]) {
    assert.throws(() => new LRU(capacity));
  }
});
