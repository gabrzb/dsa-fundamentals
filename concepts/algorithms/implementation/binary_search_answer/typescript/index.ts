export function minimumCapacity(weights: number[], days: number): number {
  if (!Number.isSafeInteger(days) || days < 1 || weights.some(w => !Number.isSafeInteger(w) || w <= 0)) throw new RangeError("days and weights must be positive safe integers");
  let low = 0, high = 0;
  for (const weight of weights) { low = Math.max(low, weight); high += weight; if (!Number.isSafeInteger(high)) throw new RangeError("total weight must be a safe integer"); }
  function feasible(capacity: number): boolean {
    let used = 1, load = 0;
    for (const weight of weights) {
      if (weight > capacity - load) { used++; load = 0; }
      load += weight;
      if (used > days) return false;
    }
    return true;
  }
  while (low < high) {
    const middle = low + Math.floor((high - low) / 2);
    if (feasible(middle)) high = middle;
    else low = middle + 1;
  }
  return low;
}
