# Minimum Distance to the Target Element

Given an integer array `nums` (0-indexed) and two integers `target` and `start`, find an index `i` such that `nums[i] == target` and `abs(i - start)` is minimized. Note that `abs(x)` is the absolute value of `x`.

Return `abs(i - start)`.

It is guaranteed that `target` exists in `nums`.

### Example 1:

> Input: `nums = [1,2,3,4,5], target = 5, start = 3`<br>
> Output: `1`<br>
> Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.<br>

### Example 2:

> Input: `nums = [1], target = 1, start = 0`<br>
> Output: `0`<br>
> Explanation: nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.<br>

### Example 3:

> Input: nums = `[1,1,1,1,1,1,1,1,1,1], target = 1, start = 0`<br>
> Output: `0`<br>
> Explanation: Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.<br>
 

### Constraints:

> `1 <= nums.length <= 1000`<br>
> `1 <= nums[i] <= 104`<br>
> `0 <= start < nums.length`<br>
> `target is in nums.`<br>

# Reference

Leetcode Problem: [Minimum Distance to the Target Element](https://leetcode.com/problems/minimum-distance-to-the-target-element/description/)