def containsDuplicate(nums):
    seen = set()

    for num in nums:
        if num in seen:
            return True
        seen.add(num)

    return False

def testContainsDuplicate():
    testCases = [
        ([1, 2, 3, 1], True),
        ([1, 2, 3, 4], False),
        ([1, 1, 1, 3, 3, 4, 3, 2, 4, 2], True),
    ]

    for i, (nums, expected) in enumerate(testCases):
        result = containsDuplicate(nums)

        print(f"containsDuplicate({nums}) = {result} | Expected: {expected}")

testContainsDuplicate()