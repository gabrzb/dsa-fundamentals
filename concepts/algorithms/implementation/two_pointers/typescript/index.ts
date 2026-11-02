export function reverseArray(values: number[]): void {
  let left = 0;
  let right = values.length - 1;
  while (left < right) {
    [values[left], values[right]] = [values[right], values[left]];
    left++;
    right--;
  }
}
