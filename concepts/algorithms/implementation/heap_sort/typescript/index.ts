function buildMaxHeap(arr: number[]): void {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }
}

function heapify(arr: number[], heapSize: number, i: number): void {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left < heapSize && arr[left] > arr[max]) {
    max = left;
  }

  if (right < heapSize && arr[right] > arr[max]) {
    max = right;
  }

  if (max !== i) {
    [arr[i], arr[max]] = [arr[max], arr[i]];
    heapify(arr, heapSize, max);
  }
}

function heapSort(arr: number[]): number[] {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}


function testHeapSort() { 
  const testCases: { input: number[]; expected: number[] }[] = [
    { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
    { input: [3, 1, 2, 3, 1], expected: [1, 1, 2, 3, 3] },
    { input: [-3, 0, 2, -1, 5], expected: [-3, -1, 0, 2, 5] },
    { input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90] },
  ];

  for (const { input, expected} of testCases) {
    console.log(`Original array: ${input}`);

    const sortedArray = heapSort(input);

    console.log(`Sorted array: ${sortedArray} | Expected: ${expected}`);
  }
}

testHeapSort();