def n_queens(n: int) -> list[list[int]]:
    if n < 0:
        raise ValueError("Board size must be nonnegative")
    result = []
    path = []
    columns = [False] * n
    rising = [False] * (2 * n)
    falling = [False] * (2 * n)

    def visit(row):
        if row == n:
            result.append(path.copy())
            return
        for column in range(n):
            up, down = row + column, row - column + n
            if columns[column] or rising[up] or falling[down]:
                continue
            columns[column] = rising[up] = falling[down] = True
            path.append(column)
            visit(row + 1)
            path.pop()
            columns[column] = rising[up] = falling[down] = False

    visit(0)
    return result
