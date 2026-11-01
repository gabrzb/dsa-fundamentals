def two_sum(nums: list[int], target: int) -> list[int]:
    prevMap = {}

    for index, num in enumerate(nums):
        diff = target - num
        if diff in prevMap:
            return [prevMap[diff], index]
        prevMap[num] = index

    return []
