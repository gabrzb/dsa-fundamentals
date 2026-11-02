import assert from "node:assert/strict";
import test from "node:test";
import { DoublyLinkedList } from "./index.ts";

test(`${DoublyLinkedList.name}: removes middle, head and tail`, () => {
  const list = new DoublyLinkedList<number>();
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
