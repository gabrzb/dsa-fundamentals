export class Solution {
  longestConsecutive(nums: number[]): number {
    if (nums.length === 0) {
      return 0;
    }

    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let length = 0;

        while (numSet.has(num + length)) {
          length++;
        }

        longestStreak = Math.max(longestStreak, length);
      }
    }

    return longestStreak;
  }
}
