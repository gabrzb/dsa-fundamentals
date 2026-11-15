def permutations(values: list[int]) -> list[list[int]]:
    values = sorted(values)
    result = []
    path = []
    used = [False] * len(values)

    def visit():
        if len(path) == len(values):
            result.append(path.copy())
            return
        for index, value in enumerate(values):
            if used[index]:
                continue
            if index > 0 and value == values[index - 1] and not used[index - 1]:
                continue
            used[index] = True
            path.append(value)
            visit()
            path.pop()
            used[index] = False

    visit()
    return result
