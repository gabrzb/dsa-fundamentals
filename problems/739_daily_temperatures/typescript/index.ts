export const dailyTemperatures = (temperatures: number[]): number[] => {
  const stack: number[] = [];
  const answer = new Array<number>(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const stackIndex = stack[stack.length - 1];
      answer[stackIndex] = i - stackIndex;
      stack.pop();
    }

    stack.push(i);
  }

  return answer;
};
