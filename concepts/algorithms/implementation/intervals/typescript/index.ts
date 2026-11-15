export function mergeIntervals(intervals: readonly (readonly [number, number])[]): [number, number][] {
  if (intervals.some(([start, end]) => start > end)) throw new RangeError("interval start must not exceed its end");
  const sorted = [...intervals].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const result: [number, number][] = [];
  for (const [start, end] of sorted) {
    const last = result.at(-1);
    if (last && start <= last[1]) last[1] = Math.max(last[1], end);
    else result.push([start, end]);
  }
  return result;
}
