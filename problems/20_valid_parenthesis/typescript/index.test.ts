import assert from "node:assert/strict";
import test from "node:test";
import { isValid } from "./index.ts";

test("parentheses reject mismatched and unclosed pairs", () => {
  for (const value of ["", "()[]{}", "([])"]) assert.equal(isValid(value), true);
  for (const value of ["([)]", "]", "(("]) assert.equal(isValid(value), false);
});
