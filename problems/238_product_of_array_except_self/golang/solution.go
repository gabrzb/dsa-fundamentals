package solution

func productExceptSelf(nums []int) []int {
	if len(nums) < 2 {
		return nums
	}

	ans := make([]int, 0, len(nums))
	left := 1
	right := 1

	for i := range nums {
		ans = append(ans, left)
		left *= nums[i]
	}

	for i := len(nums) - 1; i > 0; i-- {
		right *= nums[i]
		ans[i-1] *= right
	}

	return ans
}
