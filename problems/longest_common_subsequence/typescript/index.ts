export function memoized(a: string, b: string): number {
  const left = Array.from(a), right = Array.from(b);
  const m = left.length, n = right.length;
  const memo = Array.from({ length: m }, () => new Array<number>(n).fill(-1));
  function best(i: number, j: number): number {
    if (i === m || j === n) return 0;
    if (memo[i][j] === -1) {
      memo[i][j] = left[i] === right[j] ? 1 + best(i + 1, j + 1) : Math.max(best(i + 1, j), best(i, j + 1));
    }
    return memo[i][j];
  }
  return best(0, 0);
}

export function tabulated(a: string, b: string): number {
  const left = Array.from(a), right = Array.from(b);
  const m = left.length, n = right.length;
  const dp = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      dp[i][j] = left[i] === right[j] ? 1 + dp[i + 1][j + 1] : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  return dp[0][0];
}
