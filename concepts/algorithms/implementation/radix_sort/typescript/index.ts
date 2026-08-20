function checkNegativeNumbers(arr: number[]): boolean { 
  for (const num of arr) {
    if (num < 0) {
      return true;
    }
  }
  
  return false;  
}

function getMax(arr: number[]): number { 
  let mx: number = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mx) {
      mx = arr[i];
    }
  }
  
  return mx;
}

function countingSort(arr: number[], exp: number): number[] { 
  let output: number[] = new Array(arr.length).fill(0);
  let count: number[] = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const digit: number = Math.floor(arr[i] / exp) % 10;
    
    count[digit]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const digit: number = Math.floor(arr[i] / exp) % 10;
    
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  return output;
}

function radixSort(arr: number[]): number[] { 
  const maxNum: number = getMax(arr);
  let sortedArr: number[] = [...arr];

  for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
    sortedArr = countingSort(sortedArr, exp);
  }
  
  return sortedArr;
}

function testRadixSort() { 
  const testCases: { input: number[]; expected: number[] }[] = [
    { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
    { input: [3, 1, 2, 3, 1], expected: [1, 1, 2, 3, 3] },
    { input: [-3, 0, 2, -1, 5], expected: [-3, -1, 0, 2, 5] },
    { input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90] },
  ];

  for (const { input, expected } of testCases) {
    console.log(`Original array: ${input}`);

    if (checkNegativeNumbers(input)) {
      console.log("Basic radix sort does not support negative numbers. Skipping this test case.");
      continue;
    }

    const sortedArray = radixSort(input);

    console.log(`Sorted array: ${sortedArray} | Expected: ${expected}`);
  }
}

testRadixSort();