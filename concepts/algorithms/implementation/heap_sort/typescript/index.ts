export function buildMaxHeap(arr: number[]): void {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }
}

export function heapify(arr: number[], heapSize: number, i: number): void {
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

export function heapSort(arr: number[]): number[] {
  buildMaxHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}
