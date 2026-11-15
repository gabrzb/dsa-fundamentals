function validate(coins: number[], amount: number): void {
  if (!Number.isSafeInteger(amount) || amount < 0 || amount === Number.MAX_SAFE_INTEGER) {
    throw new RangeError("amount must be nonnegative with an exactly representable amount + 1");
  }
  if (coins.some(coin => !Number.isSafeInteger(coin) || coin <= 0)) {
    throw new RangeError("coins must be positive safe integers");
  }
}

export function memoized(coins: number[], amount: number): number {
  validate(coins, amount);
  const unreachable = amount + 1;
  const memo = new Array<number>(amount + 1).fill(-1);
  memo[0] = 0;
  function best(remaining: number): number {
    if (memo[remaining] !== -1) return memo[remaining];
    let result = unreachable;
    for (const coin of coins) {
      if (coin <= remaining) {
        const previous = best(remaining - coin);
        if (previous !== unreachable) result = Math.min(result, 1 + previous);
      }
    }
    memo[remaining] = result;
    return result;
  }
  const result = best(amount);
  return result === unreachable ? -1 : result;
}

export function tabulated(coins: number[], amount: number): number {
  validate(coins, amount);
  const unreachable = amount + 1;
  const dp = new Array<number>(amount + 1).fill(unreachable);
  dp[0] = 0;
  for (let subtotal = 1; subtotal <= amount; subtotal++) {
    for (const coin of coins) {
      if (coin <= subtotal) {
        const previous = dp[subtotal - coin];
        if (previous !== unreachable) dp[subtotal] = Math.min(dp[subtotal], 1 + previous);
      }
    }
  }
  return dp[amount] === unreachable ? -1 : dp[amount];
}
