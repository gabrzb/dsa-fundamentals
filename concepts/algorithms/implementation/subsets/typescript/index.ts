export function subsets(values: number[]): number[][] {
  const sorted = [...values].sort((a, b) => a - b);
  const result: number[][] = [];
  const path: number[] = [];

  function visit(start: number): void {
    result.push([...path]);
    for (let index = start; index < sorted.length; index++) {
      if (index > start && sorted[index] === sorted[index - 1]) {
        continue;
      }
      path.push(sorted[index]);
      visit(index + 1);
      path.pop();
    }
  }

  visit(0);
  return result;
}
