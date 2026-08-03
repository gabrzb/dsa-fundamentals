function qs(arr: number[], low: number, high: number): void {
  if (low >= high) {
    return;
  }

  const pivotIdx = partition(arr, low, high);

  qs(arr, low, pivotIdx - 1);
  qs(arr, pivotIdx + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
 const pivot = arr[high];
  let idx = low - 1;

  for (let i = low; i < high; i++) { 
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[high] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

function quickSort(arr: number[]): number[] { 
  qs(arr, 0, arr.length - 1);
  return arr;
}

function testQuickSort(): void {
  const testCases: { input: number[]; expected: number[] }[] = [
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
    { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
    { input: [3, 1, 2, 3, 1], expected: [1, 1, 2, 3, 3] },
    { input: [-3, 0, 2, -1, 5], expected: [-3, -1, 0, 2, 5] },
    { input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90] },
  ];

  for (const { input, expected } of testCases) {
    const result = quickSort([...input]);
    const passed = JSON.stringify(result) === JSON.stringify(expected);

    console.log(
      `Input: ${JSON.stringify(input)} | Result: ${JSON.stringify(result)} | Expected: ${JSON.stringify(expected)} | Passed: ${passed}`,
    );
  }
}

testQuickSort();
