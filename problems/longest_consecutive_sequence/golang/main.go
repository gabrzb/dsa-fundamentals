package main

import "fmt"

func longestConsecutive(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	numSet := make(map[int]bool)
	for _, num := range nums {
		numSet[num] = true
	}

	longestStreak := 0

	for num := range numSet {
		if !numSet[num-1] {
			length := 0

			for numSet[num+length] {
				length++
			}

			longestStreak = max(longestStreak, length)
		}
	}

	return longestStreak
}

func testLongestConsecutive() {
	tests := []struct {
		input    []int
		expected int
	}{
		{
			input:    []int{100, 4, 200, 1, 3, 2},
			expected: 4,
		},
		{
			input:    []int{0, 3, 7, 2, 5, 8, 4, 6, 0, 1},
			expected: 9,
		},
	}

	for _, test := range tests {
		result := longestConsecutive(test.input)
		fmt.Printf("Input: %v\nExpected: %d\nResult: %d\n\n", test.input, test.expected, result)
	}
}

func main() {
	testLongestConsecutive()
}