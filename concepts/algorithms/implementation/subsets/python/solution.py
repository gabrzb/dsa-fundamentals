def subsets(values: list[int]) -> list[list[int]]:
    values = sorted(values)
    result = []
    path = []

    def visit(start):
        result.append(path.copy())
        for index in range(start, len(values)):
            if index > start and values[index] == values[index - 1]:
                continue
            path.append(values[index])
            visit(index + 1)
            path.pop()

    visit(0)
    return result
