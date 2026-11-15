export function minSubarrayLen(values: number[], target: number): number {
  if (!Number.isSafeInteger(target) || target <= 0 || values.some(v => !Number.isSafeInteger(v) || v <= 0)) throw new RangeError("target and values must be positive safe integers");
  let left = 0, total = 0, best = values.length + 1;
  for (let right = 0; right < values.length; right++) {
    total += values[right];
    if (!Number.isSafeInteger(total)) throw new RangeError("window sum must be a safe integer");
    while (total >= target) {
      best = Math.min(best, right - left + 1);
      total -= values[left++];
    }
  }
  return best > values.length ? 0 : best;
}
