import assert from "node:assert/strict";
import test from "node:test";
import Queue from "./index.ts";

test("queue preserves FIFO order after emptying and refilling", () => {
  const queue = new Queue<number>();
  assert.equal(queue.dequeue(), undefined);
  queue.enqueue(1);
  queue.enqueue(2);
  assert.equal(queue.peek(), 1);
  assert.deepEqual([queue.dequeue(), queue.dequeue()], [1, 2]);
  queue.enqueue(3);
  assert.equal(queue.dequeue(), 3);
  assert.equal(queue.peek(), undefined);
});
