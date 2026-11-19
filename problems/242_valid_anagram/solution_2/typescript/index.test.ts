import assert from "node:assert/strict";
import test from "node:test";
import { isAnagram as mapAnagram } from "./index.ts";

test(`map anagrams compare character frequencies`, () => {
  assert.equal(mapAnagram("anagram", "nagaram"), true);
  assert.equal(mapAnagram("", ""), true);
  assert.equal(mapAnagram("rat", "car"), false);
  assert.equal(mapAnagram("a", "aa"), false);
  assert.equal(mapAnagram("aab", "abb"), false);
});
