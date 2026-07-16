const getMinDistance = (nums: number[], target: number, start: number): number => {
    let minDistance: number = nums.length;

        for (let i: number = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                let distance: number = i - start;

                if (distance < 0) {
                    distance = -distance;
                }

                if (distance < minDistance) {
                    minDistance = distance;
                }
            } 
        }

    return minDistance;
};


function testGetMinDistance() { 
  // test cases (QUESTION.md)
  const testCases = [
    {
      nums: [1, 2, 3, 4, 5],
      target: 5,
      start: 3,
      expected: 1,
    },
    {
      nums: [1],
      target: 1,
      start: 0,
      expected: 0,
    },
    {
      nums: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      target: 1,
      start: 0,
      expected: 0,
    },
  ];

  for (const { nums, target, start, expected } of testCases) {
    const result = getMinDistance(nums, target, start);
    console.log(`getMinDistance(${JSON.stringify(nums)}, ${target}, ${start}) = ${result} | Expected: ${expected}`);
  }
}

testGetMinDistance();