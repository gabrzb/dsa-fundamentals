function countingSort(arr: number[], exp: number): number[] {
  let output: number[] = new Array(arr.length).fill(0);
  let count: number[] = new Array(19).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const digit = Math.trunc(arr[i] / exp) % 10 + 9;

    count[digit]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.trunc(arr[i] / exp) % 10 + 9;

    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  return output;
}

export function radixSort(arr: number[]): number[] {
  let maxMagnitude = 0;
  for (const value of arr) {
    if (!Number.isSafeInteger(value)) {
      throw new RangeError("Radix sort requires safe integers");
    }
    maxMagnitude = Math.max(maxMagnitude, Math.abs(value));
  }
  let sortedArr: number[] = [...arr];

  for (let exp = 1; Math.floor(maxMagnitude / exp) > 0; exp *= 10) {
    sortedArr = countingSort(sortedArr, exp);
  }

  return sortedArr;
}
