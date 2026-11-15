export function primesUpTo(limit: number): number[] {
  if (!Number.isSafeInteger(limit) || limit < 0 || limit === Number.MAX_SAFE_INTEGER) throw new RangeError("limit must be nonnegative with representable limit + 1");
  const prime = new Array<boolean>(limit + 1).fill(true), result: number[] = [];
  prime[0] = false;
  if (limit >= 1) prime[1] = false;
  for (let candidate = 2; candidate <= Math.floor(limit / candidate); candidate++) {
    if (prime[candidate]) for (let multiple = candidate * candidate; multiple <= limit; multiple += candidate) prime[multiple] = false;
  }
  for (let value = 2; value <= limit; value++) if (prime[value]) result.push(value);
  return result;
}
