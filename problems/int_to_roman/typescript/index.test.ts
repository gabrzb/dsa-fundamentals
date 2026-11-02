import assert from "node:assert/strict";
import test from "node:test";
import { intToRoman } from "./index.ts";

test("Roman numerals handle subtractive notation", () => {
  for (const [number, expected] of [[1, "I"], [4, "IV"], [9, "IX"], [58, "LVIII"], [1994, "MCMXCIV"], [3999, "MMMCMXCIX"]] as const) {
    assert.equal(intToRoman(number), expected);
  }
});
