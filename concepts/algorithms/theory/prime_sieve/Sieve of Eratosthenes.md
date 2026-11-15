# Sieve of Eratosthenes

The sieve of Eratosthenes lists every prime integer at most a nonnegative limit, including the limit when prime. Limits zero and one return an empty list. Primes are returned in increasing order.

## How it works

Create one primality flag per candidate. Starting at two, when a candidate is still prime, clear its multiples beginning at its square. Smaller multiples already have a smaller prime factor and were handled earlier. Stop crossing off once the candidate exceeds the square root of the limit, then collect remaining true entries from two upward.

```c
for (p = 2; p <= limit / p; p++) {
    if (prime[p]) {
        for (multiple = p * p; multiple <= limit; multiple += p) {
            prime[multiple] = false;
        }
    }
}
return indicesMarkedPrimeFromTwo();
```

At limit 30, candidate two clears the even composites starting at four. Candidate three clears multiples beginning at nine. Four is already composite. Candidate five clears 25 and 30; no larger candidate square fits. The remaining entries are `[2,3,5,7,11,13,17,19,23,29]`. Every composite at most the limit has a prime factor no larger than its square root, so it is removed; only composite multiples are cleared, preserving every prime.

## Costs and project code

Let `n` be the limit. Initializing and collecting take `O(n+1)` work, while marking multiples of primes gives `O(n log log n)` time for growing `n >= 3`, with `O(n+1)` auxiliary flags and output proportional to the number of primes. The small limits have constant overhead. Go and TypeScript test `p <= limit/p` to avoid an overflowing square in the loop condition; Go also guards its marking increment. Python uses arbitrary-precision multiplication. Invalid limits are rejected, and Go/TypeScript require representable `limit+1`; all tables must fit available memory. Tests compare every limit through 150 with trial division and check the 168 primes through 1,000.

Code: [Go](../../implementation/prime_sieve/golang/solution.go), [Python](../../implementation/prime_sieve/python/solution.py), [TypeScript](../../implementation/prime_sieve/typescript/index.ts).

Tests: [Go](../../implementation/prime_sieve/golang/solution_test.go), [Python](../../implementation/prime_sieve/python/test_solution.py), [TypeScript](../../implementation/prime_sieve/typescript/index.test.ts).
