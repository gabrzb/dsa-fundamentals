function validate(weights: number[], values: number[], capacity: number): void {
  if (!Number.isSafeInteger(capacity) || capacity < 0) throw new RangeError("capacity must be a nonnegative safe integer");
  if (weights.length !== values.length) throw new RangeError("weights and values must have equal lengths");
  if (weights.some(w => !Number.isSafeInteger(w) || w <= 0)) throw new RangeError("weights must be positive safe integers");
  if (values.some(v => !Number.isSafeInteger(v) || v < 0)) throw new RangeError("values must be nonnegative safe integers");
  let total = 0;
  for (const value of values) {
    total += value;
    if (!Number.isSafeInteger(total)) throw new RangeError("total item value must be a safe integer");
  }
}

export function memoized(weights: number[], values: number[], capacity: number): number {
  validate(weights, values, capacity);
  const n = weights.length;
  const memo = Array.from({ length: n }, () => new Array<number>(capacity + 1).fill(-1));
  function best(index: number, remaining: number): number {
    if (index === n) return 0;
    if (memo[index][remaining] === -1) {
      let result = best(index + 1, remaining);
      if (weights[index] <= remaining) result = Math.max(result, values[index] + best(index + 1, remaining - weights[index]));
      memo[index][remaining] = result;
    }
    return memo[index][remaining];
  }
  return best(0, capacity);
}

export function tabulated(weights: number[], values: number[], capacity: number): number {
  validate(weights, values, capacity);
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => new Array<number>(capacity + 1).fill(0));
  for (let index = n - 1; index >= 0; index--) {
    for (let remaining = 0; remaining <= capacity; remaining++) {
      dp[index][remaining] = dp[index + 1][remaining];
      if (weights[index] <= remaining) dp[index][remaining] = Math.max(dp[index][remaining], values[index] + dp[index + 1][remaining - weights[index]]);
    }
  }
  return dp[0][capacity];
}
