package main

import "fmt"

func twoSum(nums []int, target int) []int {
	prevMap := make(map[int]int)

	for i, num := range nums {
		diff := target - num

		if index, ok := prevMap[diff]; ok {
			return []int{index, i}
		}

		prevMap[num] = i
	}

	return nil
}

func testTwoSum() {
	// test cases (QUESTION.md)
	testCases := []struct {
		nums     []int
		target   int
		expected []int
	}{
		{nums: []int{2, 7, 11, 15}, target: 9, expected: []int{0, 1}},
		{nums: []int{3, 2, 4}, target: 6, expected: []int{1, 2}},
		{nums: []int{3, 3}, target: 6, expected: []int{0, 1}},
	}

	for _, testCase := range testCases {
		result := twoSum(testCase.nums, testCase.target)
		fmt.Printf(
			"twoSum(%v, %d) = %v | Expected: %v\n",
			testCase.nums,
			testCase.target,
			result,
			testCase.expected,
		)
	}
}

func main() {
	testTwoSum()
}
