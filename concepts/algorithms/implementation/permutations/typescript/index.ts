export function permutations(values: number[]): number[][] {
  const sorted = [...values].sort((a, b) => a - b);
  const result: number[][] = [];
  const path: number[] = [];
  const used = new Array<boolean>(sorted.length).fill(false);

  function visit(): void {
    if (path.length === sorted.length) {
      result.push([...path]);
      return;
    }
    for (let index = 0; index < sorted.length; index++) {
      if (used[index]) {
        continue;
      }
      if (index > 0 && sorted[index] === sorted[index - 1] && !used[index - 1]) {
        continue;
      }
      used[index] = true;
      path.push(sorted[index]);
      visit();
      path.pop();
      used[index] = false;
    }
  }

  visit();
  return result;
}
