def MinDistance(nums, target, start):
    minDistance = len(nums)

    for i in range(len(nums)):
        if nums[i] == target:
            distance = abs(i - start)
            
            if distance < minDistance:
                minDistance = distance

    return minDistance

def testMinDistance():
    testCases = [
        ([1, 2, 3, 4, 5], 5, 3, 1),
        ([1], 1, 0, 0),
        ([1, 1, 1, 1, 1, 1, 1, 1], 1, 0, 0)
    ]

    for i, (nums, target, start, expected) in enumerate(testCases):
        result = MinDistance(nums, target, start)
        
        print(f"minDistance({nums}, {target}, {start}) = {result} | Expected: {expected}")

testMinDistance()