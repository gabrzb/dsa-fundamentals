import assert from "node:assert/strict";
import test from "node:test";
import RingBuffer from "./index.ts";

test("ring buffer wraps indices and rejects overflow", () => {
  const ring = new RingBuffer<number>(2);
  ring.enqueue(1);
  ring.enqueue(2);
  assert.throws(() => ring.enqueue(3));
  assert.equal(ring.dequeue(), 1);
  ring.enqueue(3);
  assert.equal(ring.get(1), 3);
  assert.equal(ring.get(-1), undefined);
  assert.deepEqual([ring.dequeue(), ring.dequeue()], [2, 3]);
  assert.equal(ring.dequeue(), undefined);
  assert.throws(() => new RingBuffer(0));
});
