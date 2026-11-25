def dailyTemperatures(temperatures: list[int]) -> list[int]:
    stack: list[int] = []
    answer = [0] * len(temperatures)

    for i, temperature in enumerate(temperatures):
        while stack and temperature > temperatures[stack[-1]]:
            stack_index = stack[-1]
            answer[stack_index] = i - stack_index
            stack.pop()

        stack.append(i)

    return answer
