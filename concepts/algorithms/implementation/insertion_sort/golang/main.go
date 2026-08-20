package main

import "fmt"

func insertionSort(arr []int) []int {
	for i := 1; i < len(arr); i++ {
		j := i

		for j > 0 && arr[j-1] > arr[j] {
			arr[j-1], arr[j] = arr[j], arr[j-1]
			j--
		}
	}
	return arr
}

func testInsertionSort() {
	testCases := []struct {
		input    []int
		expected []int
	}{
		{input: []int{3, 1, 2, 3, 1}, expected: []int{1, 1, 2, 3, 3}},
		{input: []int{-3, 0, 2, -1, 5}, expected: []int{-3, -1, 0, 2, 5}},
		{input: []int{64, 34, 25, 12, 22, 11, 90}, expected: []int{11, 12, 22, 25, 34, 64, 90}},
	}

	for _, testCase := range testCases {
		input := make([]int, len(testCase.input))
		copy(input, testCase.input)
		result := insertionSort(input)

		fmt.Printf(
			"Input: %v\nResult: %v, Expected: %v\n\n",
			testCase.input,
			result,
			testCase.expected,
		)
	}
}

func main() {
	testInsertionSort()
}