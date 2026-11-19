function validate(n: number): void {
  if (!Number.isInteger(n) || n < 0 || n > 45) {
    throw new RangeError("n must be an integer from 0 through 45");
  }
}

export function memoized(n: number): number {
  validate(n);
  const memo = new Array<number>(n + 1).fill(-1);
  function ways(remaining: number): number {
    if (remaining <= 1) return 1;
    if (memo[remaining] === -1) memo[remaining] = ways(remaining - 1) + ways(remaining - 2);
    return memo[remaining];
  }
  return ways(n);
}

export function tabulated(n: number): number {
  validate(n);
  const dp = new Array<number>(n + 1).fill(1);
  for (let step = 2; step <= n; step++) dp[step] = dp[step - 1] + dp[step - 2];
  return dp[n];
}
