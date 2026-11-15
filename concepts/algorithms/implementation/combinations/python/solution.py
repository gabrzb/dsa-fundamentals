def combinations(n: int, k: int) -> list[list[int]]:
    if n < 0 or k < 0:
        raise ValueError("n and k must be nonnegative")
    result = []
    path = []

    def visit(start):
        if len(path) == k:
            result.append(path.copy())
            return
        last = n - (k - len(path)) + 1
        for value in range(start, last + 1):
            path.append(value)
            visit(value + 1)
            path.pop()

    visit(1)
    return result
