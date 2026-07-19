const containsDuplicate = (nums: number[]) => { 
  let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  
  return false;
}

const testContainsDuplicate = () => { 
  const testCases = [
    { input: [1, 2, 3, 1], expected: true },
    { input: [1, 2, 3, 4], expected: false },
    { input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], expected: true },
  ];

  for (const { input, expected } of testCases) {
    const result = containsDuplicate(input);
    console.log(`containsDuplicate([${input}]) = ${result} | Expected: ${expected}`);
  }
}

testContainsDuplicate();