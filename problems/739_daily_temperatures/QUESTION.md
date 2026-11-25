# Daily Temperatures

Given an integer array `temperatures`, return an array `answer` of the same length. For each day `i`, set `answer[i]` to the number of days until the first later day with a strictly higher temperature. If every later day is as cool or cooler, leave `answer[i]` at `0`.

### Example 1

> Input: `temperatures = [73,74,75,71,69,72,76,73]`<br>
> Output: `[1,1,4,2,1,1,0,0]`<br>

### Example 2

> Input: `temperatures = [30,40,50,60]`<br>
> Output: `[1,1,1,0]`<br>

### Example 3

> Input: `temperatures = [30,60,90]`<br>
> Output: `[1,1,0]`<br>

### Constraints

> `1 <= temperatures.length <= 10^5`<br>
> `30 <= temperatures[i] <= 100`<br>

# Reference

[LeetCode 739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/description/)
