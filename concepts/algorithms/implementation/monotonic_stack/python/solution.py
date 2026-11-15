def next_greater_indices(values: list[int]) -> list[int]:
    result = [-1] * len(values)
    stack = []
    for index, value in enumerate(values):
        while stack and values[stack[-1]] < value:
            result[stack.pop()] = index
        stack.append(index)
    return result
