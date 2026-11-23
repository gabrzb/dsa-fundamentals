def productExceptSelf(nums: list[int]) -> list[int]:
    if len(nums) < 2:
        return nums

    ans = [1] * len(nums)
    left = 1
    right = 1

    for i, num in enumerate(nums):
        ans[i] = left
        left *= num

    for i in range(len(nums) - 1, 0, -1):
        right *= nums[i]
        ans[i - 1] *= right

    return ans
