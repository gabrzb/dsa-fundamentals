import assert from "node:assert/strict";
import test from "node:test";
import { DynamicArray } from "./index.ts";

test("dynamic array grows, shrinks and can be reused", () => {
  const array = new DynamicArray();
  for (let value = 0; value < 20; value++) array.insert(value);
  for (let value = 0; value < 20; value++) {
    assert.equal(array.find(value), 0);
    array.delete(value);
  }
  assert.equal(array.find(19), -1);
  array.insert(42);
  assert.equal(array.find(42), 0);
  assert.throws(() => array.delete(99));
});
