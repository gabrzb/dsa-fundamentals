package main

import "fmt"

func selectionSort(arr []int) []int {
	minIndex := 0

	for i := range arr {
		minIndex = i

		for j := i + 1; j < len(arr); j++ {
			if arr[j] < arr[minIndex] {
				minIndex = j
			}
		}

		if minIndex != i {
			arr[i], arr[minIndex] = arr[minIndex], arr[i]
		}
	}

	return arr
}

func testSelectionSort() {
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
		result := selectionSort(input)

		fmt.Printf(
			"Input: %v\nResult: %v, Expected: %v\n\n",
			testCase.input,
			result,
			testCase.expected,
		)
	}	
}

func main() {
	testSelectionSort()
}