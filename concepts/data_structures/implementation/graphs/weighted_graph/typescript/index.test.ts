import assert from "node:assert/strict";
import test from "node:test";
import { MinQueue, type Entry } from "./index.ts";

test("weighted priority queue orders weights and both tie breakers through interleaved operations", () => {
  const queue = new MinQueue();
  const reference: Entry[] = [];
  let state = 12345;
  for (let i = 0; i < 300; i++) {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    if (reference.length === 0 || state % 3 !== 0) {
      const entry: Entry = [state % 13 - 6, (state >>> 8) % 5, (state >>> 16) % 5];
      queue.push(entry);
      reference.push(entry);
    } else {
      reference.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
      assert.deepEqual(queue.pop(), reference.shift());
    }
    assert.equal(queue.length, reference.length);
  }
  reference.sort((a, b) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2]);
  for (const entry of reference) assert.deepEqual(queue.pop(), entry);
  assert.throws(() => queue.pop(), RangeError);
});
