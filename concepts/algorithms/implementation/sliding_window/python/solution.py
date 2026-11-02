def max_window_sum(values: list[int], size: int) -> int:
    if size <= 0 or size > len(values):
        raise ValueError("Window size must be between 1 and the array length")

    window_sum = sum(values[index] for index in range(size))
    best_sum = window_sum

    for right in range(size, len(values)):
        window_sum -= values[right - size]
        window_sum += values[right]
        best_sum = max(best_sum, window_sum)

    return best_sum
