import assert from "node:assert/strict";
import test from "node:test";
import { StaticArray } from "./index.ts";

test("static array enforces capacity and shifts after deletion", () => {
  const array = new StaticArray(2);
  array.insert(10);
  array.insert(20);
  assert.throws(() => array.insert(30));
  array.delete(0);
  assert.equal(array.find(20), 0);
  assert.equal(array.find(10), -1);
  array.insert(30);
  assert.equal(array.find(30), 1);
  assert.throws(() => array.delete(-1));
});
