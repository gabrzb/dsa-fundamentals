package main

import "fmt"

func searchInsert(nums []int, target int) int {
	left := 0
	right := len(nums)

	for left < right {
		mid := left + (right-left) / 2

		if nums[mid] == target {
			return mid
		} else if nums[mid] > target {
			right = mid
		} else {
			left = mid + 1
		}
	}

	return left
}

func main() {
	// test cases (QUESTION.md)
	testCases := []struct {
		nums     []int
		target   int
		expected int
	}{
		{nums: []int{1, 3, 5, 6}, target: 5, expected: 2},
		{nums: []int{1, 3, 5, 6}, target: 2, expected: 1},
		{nums: []int{1, 3, 5, 6}, target: 7, expected: 4},
	}

	for _, testCase := range testCases {
		result := searchInsert(testCase.nums, testCase.target)
		fmt.Printf(
			"searchInsert(%v, %d) = %d | Expected: %d\n",
			testCase.nums,
			testCase.target,
			result,
			testCase.expected,
		)
	}
}
