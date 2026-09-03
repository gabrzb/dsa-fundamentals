class Solution {
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

function testLongestConsecutive() { 
  const solution = new Solution();
  const testCases = [
    { input: [100, 4, 200, 1, 3, 2], expected: 4 },
    { input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1], expected: 9 },
    { input: [], expected: 0 },
    { input: [1], expected: 1 },
    { input: [1, 2, 0, 1], expected: 3 },
    { input: [9,1,-3,2,4,8,3,-1,6,-2,-4,7], expected: 4 }
  ];

  for (const { input, expected } of testCases) {
    const result = solution.longestConsecutive(input);
    console.log(`Input: [${input}], Result: ${result}, Expected: ${expected}`);
  }
}

testLongestConsecutive();