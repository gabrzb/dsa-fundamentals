def MinDistance(nums, target, start):
    minDistance = len(nums)

    for i in range(len(nums)):
        if nums[i] == target:
            distance = abs(i - start)

            if distance < minDistance:
                minDistance = distance

    return minDistance
