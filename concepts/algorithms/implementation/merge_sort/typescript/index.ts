export function merge(leftArray: number[], rightArray: number[]): number[] {
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

export function mergeSort(arr: number[]): number[] {
  if (arr.length == 1) {
    return arr;
  }

  let leftArray: number[] = arr.slice(0, Math.floor(arr.length / 2));
  let rightArray: number[] = arr.slice(Math.floor(arr.length / 2));

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}
