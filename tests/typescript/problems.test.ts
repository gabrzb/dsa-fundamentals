import assert from "node:assert/strict";
import test from "node:test";
import { containsDuplicate } from "../../problems/contains_duplicate/typescript/index.ts";
import { Solution as Anagrams } from "../../problems/group_anagrams/typescript/index.ts";
import { intToRoman } from "../../problems/int_to_roman/typescript/index.ts";
import { Solution as Consecutive } from "../../problems/longest_consecutive_sequence/typescript/index.ts";
import { getMinDistance } from "../../problems/minimum_distance/typescript/index.ts";
import { searchInsertPosition } from "../../problems/search_insert_position/typescript/index.ts";
import { twoCrystalBalls } from "../../problems/two_crystal_balls/typescript/index.ts";
import { twoSum } from "../../problems/two_sum/typescript/index.ts";
import { isAnagram as countAnagram } from "../../problems/valid_anagram/solution_1/typescript/index.ts";
import { isAnagram as mapAnagram } from "../../problems/valid_anagram/solution_2/typescript/index.ts";
import { isValid } from "../../problems/valid_parenthesis/typescript/index.ts";

test("duplicate detection handles empty and repeated values", () => {
  assert.equal(containsDuplicate([]), false);
  assert.equal(containsDuplicate([1, 2, 3]), false);
  assert.equal(containsDuplicate([1, 2, 1]), true);
});

test("two sum uses distinct indices and handles missing pairs", () => {
  assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
  assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
  assert.deepEqual(twoSum([-1, 2, 4], 3), [0, 2]);
  assert.deepEqual(twoSum([3], 6), []);
  assert.deepEqual(twoSum([], 1), []);
});

for (const check of [countAnagram, mapAnagram]) {
  test(`${check === countAnagram ? "count" : "map"} anagrams compare character frequencies`, () => {
    assert.equal(check("anagram", "nagaram"), true);
    assert.equal(check("", ""), true);
    assert.equal(check("rat", "car"), false);
    assert.equal(check("a", "aa"), false);
    assert.equal(check("aab", "abb"), false);
  });
}

test("group anagrams compares groups independently of order", () => {
  const normalize = (groups: string[][]) => groups.map(group => [...group].sort()).sort();
  assert.deepEqual(normalize(new Anagrams().groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", ""])),
    normalize([["eat", "tea", "ate"], ["tan", "nat"], ["bat"], [""]]));
  assert.deepEqual(new Anagrams().groupAnagrams([]), []);
});

test("Roman numerals handle subtractive notation", () => {
  for (const [number, expected] of [[1, "I"], [4, "IV"], [9, "IX"], [58, "LVIII"], [1994, "MCMXCIV"], [3999, "MMMCMXCIX"]] as const) {
    assert.equal(intToRoman(number), expected);
  }
});

test("consecutive sequences handle duplicates and negative numbers", () => {
  const solution = new Consecutive();
  assert.equal(solution.longestConsecutive([]), 0);
  assert.equal(solution.longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
  assert.equal(solution.longestConsecutive([1, 2, 0, 1]), 3);
  assert.equal(solution.longestConsecutive([-2, -1, 0]), 3);
});

test("minimum distance selects the nearest occurrence", () => {
  assert.equal(getMinDistance([1, 2, 3, 2], 2, 2), 1);
  assert.equal(getMinDistance([1], 1, 0), 0);
});

test("insert position handles boundaries and empty arrays", () => {
  assert.equal(searchInsertPosition([], 2), 0);
  assert.equal(searchInsertPosition([1, 3, 5], 0), 0);
  assert.equal(searchInsertPosition([1, 3, 5], 2), 1);
  assert.equal(searchInsertPosition([1, 3, 5], 5), 2);
  assert.equal(searchInsertPosition([1, 3, 5], 7), 3);
});

test("crystal balls find every boundary for lengths zero through 39", () => {
  for (let length = 0; length < 40; length++) {
    for (let boundary = 0; boundary <= length; boundary++) {
      const values = Array.from({ length }, (_, index) => index >= boundary);
      assert.equal(twoCrystalBalls(values), boundary < length ? boundary : -1, `${length}/${boundary}`);
    }
  }
});

test("parentheses reject mismatched and unclosed pairs", () => {
  for (const value of ["", "()[]{}", "([])"]) assert.equal(isValid(value), true);
  for (const value of ["([)]", "]", "(("]) assert.equal(isValid(value), false);
});
