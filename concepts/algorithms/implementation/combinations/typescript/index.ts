export function combinations(n: number, k: number): number[][] {
  if (!Number.isSafeInteger(n) || !Number.isSafeInteger(k) || n < 0 || k < 0) {
    throw new RangeError("n and k must be nonnegative safe integers");
  }
  const result: number[][] = [];
  const path: number[] = [];

  function visit(start: number): void {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    const last = n - (k - path.length) + 1;
    for (let value = start; value <= last; value++) {
      path.push(value);
      visit(value + 1);
      path.pop();
    }
  }

  visit(1);
  return result;
}
