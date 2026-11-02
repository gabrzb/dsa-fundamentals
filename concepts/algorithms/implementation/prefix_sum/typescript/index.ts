export function prefixSums(values: number[]): number[] {
  const prefix = [0];
  for (const value of values) {
    prefix.push(prefix[prefix.length - 1] + value);
  }
  return prefix;
}

export function rangeSum(prefix: number[], start: number, end: number): number {
  if (!Number.isInteger(start) || !Number.isInteger(end) ||
      start < 0 || start > end || end >= prefix.length) {
    throw new RangeError("Range must satisfy 0 <= start <= end <= array length");
  }
  return prefix[end] - prefix[start];
}
