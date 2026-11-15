def gcd(a: int, b: int) -> int:
    if any(not isinstance(v, int) or isinstance(v, bool) or v < 0 for v in (a, b)):
        raise ValueError("arguments must be nonnegative integers")
    while b:
        a, b = b, a % b
    return a
