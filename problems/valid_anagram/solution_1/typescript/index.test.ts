import assert from "node:assert/strict";
import test from "node:test";
import { isAnagram as countAnagram } from "./index.ts";

test(`count anagrams compare character frequencies`, () => {
  assert.equal(countAnagram("anagram", "nagaram"), true);
  assert.equal(countAnagram("", ""), true);
  assert.equal(countAnagram("rat", "car"), false);
  assert.equal(countAnagram("a", "aa"), false);
  assert.equal(countAnagram("aab", "abb"), false);
});
