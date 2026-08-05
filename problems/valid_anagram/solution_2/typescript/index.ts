function isAnagram(s: string, t: string): boolean { 
  if (s.length !== t.length) {
    return false;
  }

  const count: Map<string, number> = new Map();

  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (const char of t) {
    const newCount = (count.get(char) ?? 0) - 1;
    
    if (newCount < 0) {
      return false;
    }
    
    count.set(char, newCount);
  }

  return true;
}

function testAnagram() { 
  const testCases: [string, string, boolean][] = [
    ["anagram", "nagaram", true],
    ["rat", "car", false],
  ];  

  for (const [s, t, expected] of testCases) {
    const result = isAnagram(s, t);
    console.log(`isAnagram("${s}", "${t}") = ${result} | Expected: ${expected}`);
  }
}

testAnagram();