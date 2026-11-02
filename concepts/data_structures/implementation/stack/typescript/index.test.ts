import assert from "node:assert/strict";
import test from "node:test";
import { Stack } from "./index.ts";

test("stack preserves LIFO order", () => {
  const stack = new Stack<number>();
  stack.push(1);
  stack.push(2);
  assert.equal(stack.peek(), 2);
  assert.deepEqual([stack.pop(), stack.pop()], [2, 1]);
  assert.equal(stack.pop(), undefined);
});
