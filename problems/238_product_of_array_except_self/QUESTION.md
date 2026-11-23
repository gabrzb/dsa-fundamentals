# Product of Array Except Self

Given an array of integers `nums`, build an output array of the same length. For each index, multiply every element at a different index and store that product in the corresponding output position.

Use `O(n)` time, where `n` is the length of `nums`, without division.

### Example 1

> Input: `nums = [1, 2, 3, 4]`<br>
> Output: `[24, 12, 8, 6]`

### Example 2

> Input: `nums = [-1, 1, 0, -3, 3]`<br>
> Output: `[0, 0, 9, 0, 0]`

### Constraints

- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`
- Every prefix product, suffix product, and output value fits in a signed 32-bit integer.

### Follow-up

Can you use `O(1)` extra space when the output array is excluded from the space calculation?

# Reference

LeetCode problem: [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/description/)
