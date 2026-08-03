package main

import "fmt"

func qs(arr []int, low int, high int) {
	if low >= high {
		return
	}

	pivotIdx := partition(arr, low, high)

	qs(arr, low, pivotIdx-1)
	qs(arr, pivotIdx+1, high)
}

func partition(arr []int, low int, high int) int {
	pivot := arr[high]
	idx := low - 1

	for i := low; i < high; i++ {
		if arr[i] < pivot {
			idx++
			arr[idx], arr[i] = arr[i], arr[idx]
		}
	}

	idx++
	arr[high], arr[idx] = arr[idx], pivot

	return idx
}

func quickSort(arr []int) []int {
	qs(arr, 0, len(arr)-1)
	return arr
}

func equalSlices(first []int, second []int) bool {
	if len(first) != len(second) {
		return false
	}

	for i := range first {
		if first[i] != second[i] {
			return false
		}
	}

	return true
}

func testQuickSort() {
	testCases := []struct {
		input    []int
		expected []int
	}{
		{input: []int{}, expected: []int{}},
		{input: []int{1}, expected: []int{1}},
		{input: []int{1, 2, 3, 4, 5}, expected: []int{1, 2, 3, 4, 5}},
		{input: []int{5, 4, 3, 2, 1}, expected: []int{1, 2, 3, 4, 5}},
		{input: []int{3, 1, 2, 3, 1}, expected: []int{1, 1, 2, 3, 3}},
		{input: []int{-3, 0, 2, -1, 5}, expected: []int{-3, -1, 0, 2, 5}},
		{input: []int{64, 34, 25, 12, 22, 11, 90}, expected: []int{11, 12, 22, 25, 34, 64, 90}},
	}

	for _, testCase := range testCases {
		input := make([]int, len(testCase.input))
		copy(input, testCase.input)
		result := quickSort(input)
		passed := equalSlices(result, testCase.expected)

		fmt.Printf(
			"Input: %v | Result: %v | Expected: %v | Passed: %t\n",
			testCase.input,
			result,
			testCase.expected,
			passed,
		)
	}
}

func main() {
	testQuickSort()
}
