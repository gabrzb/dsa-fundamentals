export function nQueens(n: number): number[][] {
  if (!Number.isSafeInteger(n) || n < 0) {
    throw new RangeError("Board size must be a nonnegative safe integer");
  }
  const result: number[][] = [];
  const path: number[] = [];
  const columns = new Array<boolean>(n).fill(false);
  const rising = new Array<boolean>(2 * n).fill(false);
  const falling = new Array<boolean>(2 * n).fill(false);

  function visit(row: number): void {
    if (row === n) {
      result.push([...path]);
      return;
    }
    for (let column = 0; column < n; column++) {
      const up = row + column;
      const down = row - column + n;
      if (columns[column] || rising[up] || falling[down]) {
        continue;
      }
      columns[column] = rising[up] = falling[down] = true;
      path.push(column);
      visit(row + 1);
      path.pop();
      columns[column] = rising[up] = falling[down] = false;
    }
  }

  visit(0);
  return result;
}
