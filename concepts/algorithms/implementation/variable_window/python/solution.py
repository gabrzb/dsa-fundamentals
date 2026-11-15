def min_subarray_len(values: list[int], target: int) -> int:
    if not isinstance(target, int) or isinstance(target, bool) or target <= 0 or any(not isinstance(value, int) or isinstance(value, bool) or value <= 0 for value in values):
        raise ValueError("target and values must be positive integers")
    left = total = 0
    best = len(values) + 1
    for right, value in enumerate(values):
        total += value
        while total >= target:
            best = min(best, right - left + 1)
            total -= values[left]
            left += 1
    return 0 if best > len(values) else best
