export function nextGreaterIndices(values: number[]): number[] {
  const result = new Array<number>(values.length).fill(-1), stack: number[] = [];
  for (let index = 0; index < values.length; index++) {
    while (stack.length && values[stack[stack.length - 1]] < values[index]) result[stack.pop()!] = index;
    stack.push(index);
  }
  return result;
}
