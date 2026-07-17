const isValid = (s: string): boolean => {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const current of s) {
    switch (current) {
      case '(':
      case '[':
      case '{':
        stack.push(current);
        break;
      case ')':
      case ']':
      case '}':
        if (stack.pop() !== pairs[current]) {
          return false;
        }
        break;
    }
  }

  return stack.length === 0;
};

function testIsParenthesisValid() { 
  // test cases (QUESTION.md)
  const testCases = [
    { input: "()", expected: true },
    { input: "()[]{}", expected: true },
    { input: "(]", expected: false },
    { input: "([])", expected: true },
    { input: "([)]", expected: false },
  ];

  for (const { input, expected } of testCases) {
    const result = isValid(input);
    console.log(`isValid('${input}') = ${result} | Expected: ${expected}`);
  }
}

testIsParenthesisValid();