import assert from "node:assert/strict";
import test from "node:test";
import { linearSearch } from "./index.ts";

test(`${linearSearch.name}: finds boundaries and reports missing elements`, () => {
  assert.equal(linearSearch([], 1), -1);
  assert.equal(linearSearch([1], 1), 0);
  assert.equal(linearSearch([1, 3, 5], 1), 0);
  assert.equal(linearSearch([1, 3, 5], 5), 2);
  assert.equal(linearSearch([1, 3, 5], 2), -1);
});
