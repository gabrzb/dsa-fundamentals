import assert from "node:assert/strict";
import test from "node:test";
import { HashMap } from "./index.ts";

test("hash map handles collisions, updates and removals", () => {
  const map = new HashMap(1);
  map.put("a", 1);
  map.put("b", 2);
  map.put("c", 3);
  map.put("b", 20);
  map.remove("a");
  map.remove("c");
  map.remove("missing");
  assert.equal(map.get("b"), 20);
  assert.equal(map.get("a"), undefined);
  assert.equal(map.get("c"), undefined);
  assert.throws(() => new HashMap(0));
});
