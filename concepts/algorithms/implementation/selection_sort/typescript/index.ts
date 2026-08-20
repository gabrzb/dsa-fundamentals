function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) { 
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) { 
      if (arr[j] < arr[minIndex]) { 
        minIndex = j;
      }
    }

    if (minIndex !== i) { 
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}

function testSelectionSort() { 
  const testCases: { input: number[]; expected: number[] }[] = [
    { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
    { input: [3, 1, 2, 3, 1], expected: [1, 1, 2, 3, 3] },
    { input: [-3, 0, 2, -1, 5], expected: [-3, -1, 0, 2, 5] },
    { input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90] },
  ];

  for (const { input, expected} of testCases) {
    console.log(`Original array: ${input}`);

    const sortedArray = selectionSort(input);

    console.log(`Sorted array: ${sortedArray} | Expected: ${expected}`);
  }
}

testSelectionSort();