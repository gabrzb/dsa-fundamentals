export function gcd(a: number, b: number): number {
  if (!Number.isSafeInteger(a) || !Number.isSafeInteger(b) || a < 0 || b < 0) throw new RangeError("arguments must be nonnegative safe integers");
  while (b) [a, b] = [b, a % b];
  return a;
}
