# Group Anagrams

Given an array of strings `strs`, organize the strings into groups of anagrams. The groups may be returned in any order.

Two strings are anagrams when one can be formed by rearranging all the letters of the other.

### Example 1:

> Input: `strs = ["eat","tea","tan","ate","nat","bat"]`<br>
> Output: `[["bat"],["nat","tan"],["ate","eat","tea"]]`<br>
> Explanation: `"eat"`, `"tea"`, and `"ate"` form one group; `"tan"` and `"nat"` form another; `"bat"` has no other matching anagram.<br>

### Example 2:

> Input: `strs = [""]`<br>
> Output: `[[""]]`<br>

### Example 3:

> Input: `strs = ["a"]`<br>
> Output: `[["a"]]`<br>

### Constraints:

> `1 <= strs.length <= 10^4`<br>
> `0 <= strs[i].length <= 100`<br>
> Every string in `strs` contains only lowercase English letters.<br>

# Reference

Leetcode Problem 49: [Group Anagrams](https://leetcode.com/problems/group-anagrams/description/)
