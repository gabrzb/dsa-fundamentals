import assert from "node:assert/strict";
import test from "node:test";
import { Solution as Anagrams } from "./index.ts";

test("group anagrams compares groups independently of order", () => {
  const normalize = (groups: string[][]) => groups.map(group => [...group].sort()).sort();
  assert.deepEqual(normalize(new Anagrams().groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", ""])),
    normalize([["eat", "tea", "ate"], ["tan", "nat"], ["bat"], [""]]));
  assert.deepEqual(new Anagrams().groupAnagrams([]), []);
});
