# 125. Valid Palindrome

Given a printable ASCII string, return whether it reads the same in both directions after converting letters to lowercase and keeping only letters and digits.

## Filter, then compare

In `"A, 7a"`, lowercasing produces `"a, 7a"`. Filtering removes the comma and space, leaving `"a7a"`. The pointers compare the two outer `a` characters and meet at `7`.

Each successful comparison verifies one mirrored pair. A mismatch makes the result false. Once the pointers meet or cross, every pair has been checked. A center character matches itself, and a string that filters down to empty has no pairs to check.

```c
filtered = keepAsciiLettersAndDigits(lowercase(s));
left = 0;
right = length(filtered) - 1;

while (left < right) {
    if (filtered[left] != filtered[right]) {
        return false;
    }
    left++;
    right--;
}
return true;
```

## Costs and code

Let `n` be the input length. TypeScript removes non-alphanumeric characters with a regular expression, and Python joins the characters that pass `isalnum()`. Under the ASCII input constraint, both take `O(n)` time and `O(n)` auxiliary space. [TypeScript](typescript/index.ts) · [Python](python/solution.py)

Go removes one byte at a time by concatenating the parts on either side. After a removal, it checks the same index because the next byte has shifted into that position. Each concatenation can copy `O(n)` bytes, giving `O(n²)` worst-case time and `O(n)` auxiliary space for the strings used in a single step. [Go](golang/solution.go)
