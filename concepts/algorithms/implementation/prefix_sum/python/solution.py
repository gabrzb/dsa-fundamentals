def prefix_sums(values: list[int]) -> list[int]:
    prefix = [0]

    for value in values:
        prefix.append(prefix[-1] + value)

    return prefix


def range_sum(prefix: list[int], start: int, end: int) -> int:
    if start < 0 or start > end or end >= len(prefix):
        raise IndexError("Range must satisfy 0 <= start <= end <= array length")

    return prefix[end] - prefix[start]
