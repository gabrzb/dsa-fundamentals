package main

import "fmt"

func containsDuplicate(nums []int) bool {
	seen := make(map[int]int)
	
    for _, number := range nums {
        seen[number]++
        if seen[number] > 1 {
            return true
        }
    }

    return false
}

func main() {
	testCases := []struct {
		nums     []int
		expected bool
	}{
		{nums: []int{1, 2, 3, 1}, expected: true},
		{nums: []int{1, 2, 3, 4}, expected: false},
		{nums: []int{1, 1, 1, 3, 3, 4, 3, 2, 4, 2}, expected: true},
	}

	for _, testCase := range testCases {
		result := containsDuplicate(testCase.nums)
		fmt.Printf(
			"containsDuplicate(%v) = %t | Expected: %t\n",
			testCase.nums,
			result,
			testCase.expected,
		)
	}
}