package main

import "fmt"

func getMinDistance(nums []int, target int, start int) int {
	minDistance := len(nums)

	for i, values := range nums {
		if values == target {
			distance := i - start
			if distance < 0 {
				distance = -distance
			}
			if distance < minDistance {
				minDistance = distance
			}
		}
	}

	return minDistance
}

func main() {
	// test cases (QUESTION.md)
	testCases := []struct {
		nums     []int
		target   int
		start    int
		expected int
	}{
		{nums: []int{1, 2, 3, 4, 5}, target: 5, start: 3, expected: 1},
		{nums: []int{1}, target: 1, start: 0, expected: 0},
		{nums: []int{1, 1, 1, 1, 1, 1, 1, 1, 1, 1}, target: 1, start: 0, expected: 0},
	}

	for _, testCase := range testCases {
		result := getMinDistance(testCase.nums, testCase.target, testCase.start)
		fmt.Printf(
			"getMinDistance(%v, %d, %d) = %d | Expected: %d\n",
			testCase.nums,
			testCase.target,
			testCase.start,
			result,
			testCase.expected,
		)
	}
}
