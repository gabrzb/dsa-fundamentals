function twoSum(nums: number[], target: number): number[] {
  let previousMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (previousMap.has(diff)) {
      return [previousMap.get(diff)!, i];
    }
    previousMap.set(nums[i], i);
  }

  return [];
}

function testTwoSum() {
  const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
  ];

  for (const { nums, target, expected } of testCases) {
    const result = twoSum(nums, target);
    const passed = JSON.stringify(result) === JSON.stringify(expected);
    console.log(`twoSum(${JSON.stringify(nums)}, ${target}) = ${JSON.stringify(result)} | Expected: ${JSON.stringify(expected)} | ${passed ? 'Passed' : 'Failed'}`);
  }
}

testTwoSum();