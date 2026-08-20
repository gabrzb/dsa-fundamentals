function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) { 
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }

  return arr;
}

function testInsertionSort() { 
  const testCases: { input: number[]; expected: number[] }[] = [
    { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
    { input: [3, 1, 2, 3, 1], expected: [1, 1, 2, 3, 3] },
    { input: [-3, 0, 2, -1, 5], expected: [-3, -1, 0, 2, 5] },
    { input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90] },
  ];

  for (const { input, expected} of testCases) {
    console.log(`Original array: ${input}`);

    const sortedArray = insertionSort(input);

    console.log(`Sorted array: ${sortedArray} | Expected: ${expected}`);
  }
}

testInsertionSort();