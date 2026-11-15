# Bit Operations

Bit operations read and change individual binary digits of an integer. This module uses unsigned 32-bit words from zero through 4,294,967,295, with positions zero through 31 counted from the least significant bit. It exposes set, clear, toggle, membership, logical right shift, set-bit count and power-of-two detection.

## How it works

A mask `1 << bit` selects one position. OR sets it, AND with the complement clears it, XOR toggles it, and AND tests it. Logical right shift inserts zeroes at the high end. Kernighan's count repeatedly applies `value & (value-1)`, removing exactly the lowest set bit each time.

```c
count = 0;
while (value != 0) {
    value = value & (value - 1);
    count++;
}
return count;
```

For decimal 10 (`1010`), setting bit zero yields 11, clearing bit one yields 8, toggling bit three yields 2 and shifting right by one yields 5. Counting visits `10 -> 8 -> 0`, so the result is two. A nonzero power of two has exactly one set bit, hence `value != 0 && (value & (value-1)) == 0`; the explicit nonzero check excludes zero.

## Costs and project code

All masks, tests and shifts are constant-time word operations. Counting uses one iteration per set bit, at most 32; for the fixed 32-bit domain its worst-case time is also constant, with `O(1)` storage throughout. Go accepts `uint32` values and checks integer bit positions. Python/TypeScript validate unsigned words and positions; TypeScript converts mutating results with `>>> 0` because JavaScript's bitwise intermediates are signed 32-bit values. Python's unbounded complement is restricted by AND with the validated word. Shift amounts 32 or larger are rejected rather than silently wrapping as JavaScript ordinarily does. Tests compare against arithmetic masks and independent bit counts, especially bit 31 and the all-ones word.

Code: [Go](../../implementation/bit_operations/golang/solution.go), [Python](../../implementation/bit_operations/python/solution.py), [TypeScript](../../implementation/bit_operations/typescript/index.ts).

Tests: [Go](../../implementation/bit_operations/golang/solution_test.go), [Python](../../implementation/bit_operations/python/test_solution.py), [TypeScript](../../implementation/bit_operations/typescript/index.test.ts).
