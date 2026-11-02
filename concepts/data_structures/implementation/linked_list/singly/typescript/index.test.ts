import assert from "node:assert/strict";
import test from "node:test";
import { SinglyLinkedList } from "./index.ts";

test(`${SinglyLinkedList.name}: removes middle, head and tail`, () => {
  const list = new SinglyLinkedList<number>();
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
