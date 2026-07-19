def searchInsertPosition(nums, target):
    low = 0
    high = len(nums)

    while low < high:
        mid = (low + high) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            low = mid + 1
        else:
            high = mid

    return low

def testSearchInsertPosition():
    testCases = [
        ([1, 3, 5, 6], 5, 2),
        ([1, 3, 5, 6], 2, 1),
        ([1, 3, 5, 6], 7, 4)
    ]
    
    for nums, target, expected in testCases:
        result = searchInsertPosition(nums, target)
        
        print(f"searchInsertPosition({nums}, {target}) = {result} | Expected: {expected}")

testSearchInsertPosition()