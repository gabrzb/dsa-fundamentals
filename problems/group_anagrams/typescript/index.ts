class Solution {
  groupAnagrams(strs: string[]): string[][] { 
    const res: { [key: string]: string[] } = {};

    for (const str of strs) { 
      let count: number[] = new Array(26).fill(0);

      for (const char of str) { 
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }

      res[count.join('#')] = res[count.join('#')] || [];
      res[count.join('#')].push(str);
    }

    return Object.values(res);
  }
}

function testGroupAnagrams() { 
  const solution = new Solution();

  const testCases: { input: string[]; expected: string[][] }[] = [
    { input: ["eat", "tea", "tan", "ate", "nat", "bat"], expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]] },
    { input: [""], expected: [[""]] },
    { input: ["a"], expected: [["a"]] },
  ];

  for (const { input, expected } of testCases) { 
    const result = solution.groupAnagrams(input);
    console.log(`Input: ${JSON.stringify(input)}\nOutput: ${JSON.stringify(result)}\nExpected: ${JSON.stringify(expected)}\n`);
  }  
}

testGroupAnagrams();