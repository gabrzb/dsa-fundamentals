# 125. Valid Palindrome

Given a printable ASCII string, return whether it reads the same in both directions after converting letters to lowercase and keeping only letters and digits.

## Filter and compare

In `"A, 7a"`, lowercasing produces `"a, 7a"`. Filtering removes the comma and space, leaving `"a7a"`. The pointers compare the two outer `a` characters and meet at `7`.

Each successful comparison verifies one mirrored pair. A mismatch makes the result false. Once the pointers meet or cross, every pair has been checked. A center character matches itself, and a string that filters down to empty has no pairs to check.

TypeScript and Python build the filtered string before comparing pairs.

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

Go starts with two pointers on the original string. If either points to a byte outside ASCII letters and digits, it moves that pointer inward and checks again. Each skipped byte would have been removed by the filter. When both bytes are alphanumeric, it compares their lowercase forms. Each iteration moves at least one pointer inward, so Go takes `O(n)` time and `O(1)` auxiliary space. [Go](golang/solution.go)
