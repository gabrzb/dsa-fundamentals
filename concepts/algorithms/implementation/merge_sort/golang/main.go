package main

import "fmt"

func merge(left, right []int) []int {
	mergedArray := make([]int, 0, len(left)+len(right))

	for len(left) > 0 && len(right) > 0 {
		if left[0] <= right[0] {
			mergedArray = append(mergedArray, left[0])
			left = left[1:]
		} else {
			mergedArray = append(mergedArray, right[0])
			right = right[1:]
		}
	}

	for len(left) > 0 {
		mergedArray = append(mergedArray, left[0])
		left = left[1:]
	}

	for len(right) > 0 {
		mergedArray = append(mergedArray, right[0])
		right = right[1:]
	}

	return mergedArray
}

func mergeSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	leftArray := arr[:len(arr)/2]
	rightArray := arr[len(arr)/2:]

	return merge(mergeSort(leftArray), mergeSort(rightArray))
}

func testMergeSort() {
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
		result := mergeSort(input)

		fmt.Printf(
			"Input: %v\nResult: %v, Expected: %v\n\n",
			testCase.input,
			result,
			testCase.expected,
		)
	}
}

func main() {
	testMergeSort()
}