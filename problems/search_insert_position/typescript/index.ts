const searchInsertPosition = (nums: number[], target: number): number => { 
  let left: number = 0;
  let right: number = nums.length;

  while (left < right) {
    const mid: number = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function testSearchInsertPosition() { 
  // test cases (QUESTION.md)
  const testCases = [
    {
      nums: [1, 3, 5, 6],
      target: 5,
      expected: 2,
    },
    {
      nums: [1, 3, 5, 6],
      target: 2,
      expected: 1,
    },
    {
      nums: [1, 3, 5, 6],
      target: 7,
      expected: 4,
    }
  ];
  
  for (const { nums, target, expected } of testCases) {
    const result = searchInsertPosition(nums, target);
    console.log(`searchInsertPosition(${JSON.stringify(nums)}, ${target}) = ${result} | Expected: ${expected}`);
  }
}

testSearchInsertPosition();