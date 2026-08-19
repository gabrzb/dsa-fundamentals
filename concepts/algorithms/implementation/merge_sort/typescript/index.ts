function merge(leftArray: number[], rightArray: number[]): number[] { 
  let mergedArray: number[] = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] > rightArray[0]) {
      mergedArray.push(rightArray.shift()!);
    } else {
      mergedArray.push(leftArray.shift()!);
    }
  }

  while (leftArray.length) { 
    mergedArray.push(leftArray.shift()!);
  }

  while (rightArray.length) {
    mergedArray.push(rightArray.shift()!);
  }

  return mergedArray;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length == 1) {
    return arr;
  }

  let leftArray: number[] = arr.slice(0, Math.floor(arr.length / 2));
  let rightArray: number[] = arr.slice(Math.floor(arr.length / 2));

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function testMergeSort() { 
  const testCases: { input: number[]; expected: number[] }[] = [
    { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
    { input: [3, 1, 2, 3, 1], expected: [1, 1, 2, 3, 3] },
    { input: [-3, 0, 2, -1, 5], expected: [-3, -1, 0, 2, 5] },
    { input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90] },
  ];

  for (const { input, expected} of testCases) {
    console.log(`Original array: ${input}`);

    const sortedArray = mergeSort(input);

    console.log(`Sorted array: ${sortedArray} | Expected: ${expected}`);
  }
}

testMergeSort();