def reverse_array(values: list[int]) -> None:
    left, right = 0, len(values) - 1

    while left < right:
        values[left], values[right] = values[right], values[left]
        left += 1
        right -= 1
