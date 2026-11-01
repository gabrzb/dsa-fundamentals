export function checkNegativeNumbers(arr: number[]): boolean {
  for (const num of arr) {
    if (num < 0) {
      return true;
    }
  }

  return false;
}

export function getMax(arr: number[]): number {
  let mx: number = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mx) {
      mx = arr[i];
    }
  }

  return mx;
}

export function countingSort(arr: number[], exp: number): number[] {
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

export function radixSort(arr: number[]): number[] {
  if (checkNegativeNumbers(arr)) {
    throw new Error("Radix sort requires nonnegative integers");
  }
  const maxNum: number = getMax(arr);
  let sortedArr: number[] = [...arr];

  for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
    sortedArr = countingSort(sortedArr, exp);
  }

  return sortedArr;
}
