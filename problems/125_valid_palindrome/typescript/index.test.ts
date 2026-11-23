import assert from "node:assert/strict";
import test from "node:test";
import { isPalindrome } from "./index.ts";

test("checks palindromes after filtering", () => {
  const cases: [string, boolean][] = [
    ["A man, a plan, a canal: Panama", true],
    ["race a car", false],
    [" ", true],
    ["A, 7a", true],
    ["0P", false],
  ];

  for (const [input, expected] of cases) {
    assert.equal(isPalindrome(input), expected, JSON.stringify(input));
  }
});
