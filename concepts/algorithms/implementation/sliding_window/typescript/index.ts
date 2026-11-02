export function maxWindowSum(values: number[], size: number): number {
  if (!Number.isInteger(size) || size <= 0 || size > values.length) {
    throw new RangeError("Window size must be between 1 and the array length");
  }

  let windowSum = 0;

  for (let index = 0; index < size; index++) {
    windowSum += values[index];
  }

  let bestSum = windowSum;

  for (let right = size; right < values.length; right++) {
    windowSum -= values[right - size];
    windowSum += values[right];
    bestSum = Math.max(bestSum, windowSum);
  }

  return bestSum;
}
