import assert from "node:assert/strict";
import test from "node:test";
import { binarySearch } from "../../concepts/algorithms/implementation/binary_search/typescript/index.ts";
import { linearSearch } from "../../concepts/algorithms/implementation/linear_search/typescript/index.ts";
import { bubbleSort } from "../../concepts/algorithms/implementation/bubble_sort/typescript/index.ts";
import { insertionSort } from "../../concepts/algorithms/implementation/insertion_sort/typescript/index.ts";
import { selectionSort } from "../../concepts/algorithms/implementation/selection_sort/typescript/index.ts";
import { mergeSort } from "../../concepts/algorithms/implementation/merge_sort/typescript/index.ts";
import { quickSort } from "../../concepts/algorithms/implementation/quick_sort/typescript/index.ts";
import { heapSort } from "../../concepts/algorithms/implementation/heap_sort/typescript/index.ts";
import { radixSort } from "../../concepts/algorithms/implementation/radix_sort/typescript/index.ts";
import { solve } from "../../concepts/algorithms/implementation/recursion/typescript/index.ts";

for (const sort of [bubbleSort, insertionSort, selectionSort, mergeSort, quickSort, heapSort, radixSort]) {
  test(`${sort.name}: sorts empty, repeated, sorted and reversed values`, () => {
    const cases = [[], [1], [3, 1, 2, 1], [0, 10, 2, 100], [1, 2, 3], [3, 2, 1]];
    if (sort !== radixSort) cases.push([-3, 0, 2, -1]);
    for (const values of cases) {
      assert.deepEqual(sort([...values]), [...values].sort((a, b) => a - b));
    }
  });
}

test("radix sort rejects negative integers", () => {
  assert.throws(() => radixSort([-1, 2]));
});

for (const search of [linearSearch, binarySearch]) {
  test(`${search.name}: finds boundaries and reports missing elements`, () => {
    assert.equal(search([], 1), -1);
    assert.equal(search([1], 1), 0);
    assert.equal(search([1, 3, 5], 1), 0);
    assert.equal(search([1, 3, 5], 5), 2);
    assert.equal(search([1, 3, 5], 2), -1);
  });
}

test("maze solver returns a connected path or an empty result", () => {
  assert.deepEqual(solve(["   "], "x", { x: 0, y: 0 }, { x: 2, y: 0 }), [
    { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 },
  ]);
  assert.deepEqual(solve([" x "], "x", { x: 0, y: 0 }, { x: 2, y: 0 }), []);
});
