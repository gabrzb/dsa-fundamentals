# Greatest Common Divisor

The greatest common divisor (GCD, or MDC) of two nonnegative integers is their greatest shared positive divisor when at least one is nonzero. This implementation returns `gcd(a,0)=a` and uses the computational convention `gcd(0,0)=0`. Negative arguments are outside this API's domain.

## How it works

Euclid's algorithm replaces `(a,b)` with `(b,a % b)` until the second value is zero. A number divides both old operands exactly when it divides both new ones, because subtracting a multiple of `b` preserves common divisors. The remainder is smaller than the nonzero second operand, so the process terminates.

```c
while (b != 0) {
    remainder = a % b;
    a = b;
    b = remainder;
}
return a;
```

For `(1071,462)`, the states are `(462,147)`, `(147,21)` and `(21,0)`, so return 21. At termination the remaining nonzero operand is divisible by every original common divisor and divides both reduced operands; the preserved divisor set proves the result.

## Costs and project code

The number of remainder steps is `O(1+log(min(a,b)+1))`, with `O(1)` auxiliary storage. This is an arithmetic-operation count; large arbitrary-precision division is not constant time. Go accepts `uint64`, Python accepts nonnegative integers and TypeScript requires nonnegative safe integers. Python/TypeScript reject invalid numeric domains. Go's unsigned type expresses its domain at the type boundary. Inputs are scalars and no array or recursive stack is created. Tests compare all argument pairs below 50 with divisor enumeration, including both zero orientations.

Code: [Go](../../implementation/gcd/golang/solution.go), [Python](../../implementation/gcd/python/solution.py), [TypeScript](../../implementation/gcd/typescript/index.ts).

Tests: [Go](../../implementation/gcd/golang/solution_test.go), [Python](../../implementation/gcd/python/test_solution.py), [TypeScript](../../implementation/gcd/typescript/index.test.ts).
