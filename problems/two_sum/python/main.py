def two_sum(self, nums: list[int], target: int) -> list[int]:
    prevMap = {}

    for index, num in enumerate(nums):
        diff = target - num
        if diff in prevMap:
            return [prevMap[diff], index]
        prevMap[num] = index

    return []

def test_two_sum():
    testCases = [
        ([2, 7, 11, 15], 9, [0, 1]),
        ([3, 2, 4], 6, [1, 2]),
        ([3, 3], 6, [0, 1]),
    ]

    for i, (nums, target, expected) in enumerate(testCases):
        result = two_sum(None, nums, target)
        print(f"Test case {i + 1}: {'Passed' if result == expected else 'Failed'}")

test_two_sum()