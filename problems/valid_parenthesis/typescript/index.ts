export const isValid = (s: string): boolean => {
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
