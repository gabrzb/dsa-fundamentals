import assert from "node:assert/strict";
import test from "node:test";
import { DynamicArray } from "../../concepts/data_structures/implementation/arrays/dynamic_array/typescript/index.ts";
import { StaticArray } from "../../concepts/data_structures/implementation/arrays/static_array/typescript/index.ts";
import { HashMap } from "../../concepts/data_structures/implementation/hashmaps/typescript/index.ts";
import { minHeap } from "../../concepts/data_structures/implementation/heap/typescript/index.ts";
import { SinglyLinkedList } from "../../concepts/data_structures/implementation/linked_list/singly/typescript/index.ts";
import { DoublyLinkedList } from "../../concepts/data_structures/implementation/linked_list/doubly/typescript/index.ts";
import { LRU } from "../../concepts/data_structures/implementation/lru_cache/typescript/index.ts";
import Queue from "../../concepts/data_structures/implementation/queues/typescript/index.ts";
import RingBuffer from "../../concepts/data_structures/implementation/ringbuffer/typescript/index.ts";
import { Stack } from "../../concepts/data_structures/implementation/stack/typescript/index.ts";

test("dynamic array grows, shrinks and can be reused", () => {
  const array = new DynamicArray();
  for (let value = 0; value < 20; value++) array.insert(value);
  for (let value = 0; value < 20; value++) {
    assert.equal(array.find(value), 0);
    array.delete(value);
  }
  assert.equal(array.find(19), -1);
  array.insert(42);
  assert.equal(array.find(42), 0);
  assert.throws(() => array.delete(99));
});

test("static array enforces capacity and shifts after deletion", () => {
  const array = new StaticArray(2);
  array.insert(10);
  array.insert(20);
  assert.throws(() => array.insert(30));
  array.delete(0);
  assert.equal(array.find(20), 0);
  assert.equal(array.find(10), -1);
  array.insert(30);
  assert.equal(array.find(30), 1);
  assert.throws(() => array.delete(-1));
});

test("hash map handles collisions, updates and removals", () => {
  const map = new HashMap(1);
  map.put("a", 1);
  map.put("b", 2);
  map.put("c", 3);
  map.put("b", 20);
  map.remove("a");
  map.remove("c");
  map.remove("missing");
  assert.equal(map.get("b"), 20);
  assert.equal(map.get("a"), undefined);
  assert.equal(map.get("c"), undefined);
  assert.throws(() => new HashMap(0));
});

test("heap extracts repeated and negative values in order", () => {
  const heap = new minHeap();
  const values = [5, -1, 3, 3, 0, 10, 2];
  for (const value of values) heap.insert(value);
  assert.deepEqual(values.map(() => heap.delete()), [...values].sort((a, b) => a - b));
  assert.equal(heap.length, 0);
  heap.insert(4);
  assert.equal(heap.delete(), 4);
});

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

test("stack preserves LIFO order", () => {
  const stack = new Stack<number>();
  stack.push(1);
  stack.push(2);
  assert.equal(stack.peek(), 2);
  assert.deepEqual([stack.pop(), stack.pop()], [2, 1]);
  assert.equal(stack.pop(), undefined);
});

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

test("LRU refreshes reads and updates before eviction", () => {
  const cache = new LRU<string, number>(2);
  cache.update("a", 1);
  cache.update("b", 2);
  assert.equal(cache.get("a"), 1);
  cache.update("c", 3);
  assert.equal(cache.get("b"), undefined);
  cache.update("a", 10);
  cache.update("d", 4);
  assert.equal(cache.get("c"), undefined);
  assert.equal(cache.get("a"), 10);
});

test("LRU rejects invalid capacities", () => {
  for (const capacity of [0, -1, 1.5, NaN]) {
    assert.throws(() => new LRU(capacity));
  }
});

for (const List of [SinglyLinkedList, DoublyLinkedList]) {
  test(`${List.name}: removes middle, head and tail`, () => {
    const list = new List<number>();
    list.insertInFront(2);
    list.insertInFront(1);
    list.insertInBack(3);
    assert.ok(list.search(2));
    for (const value of [2, 1, 3]) {
      list.delete(value);
      assert.equal(list.search(value), undefined);
    }
    assert.throws(() => list.delete(99));
  });
}

test("doubly linked list inserts at head, middle and end", () => {
  const list = new DoublyLinkedList<number>();
  list.insertInSpecificPosition(1, 0);
  list.insertInSpecificPosition(3, 1);
  list.insertInSpecificPosition(2, 1);
  assert.ok(list.search(2));
  list.delete(3);
  assert.equal(list.search(3), undefined);
  assert.throws(() => list.insertInSpecificPosition(4, 5));
});
