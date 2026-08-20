package main

import "fmt"

func buildMaxHeap(arr []int) {
	for i := len(arr)/2 - 1; i >= 0; i-- {
		heapify(arr, len(arr), i)
	}
}

func heapify(arr []int, heapSize int, i int) {
	left := 2 * i + 1
	right := 2 * i + 2
	max := i

	if left < heapSize && arr[left] > arr[max] {
		max = left
	}

	if right < heapSize && arr[right] > arr[max] {
		max = right
	}

	if max != i {
		arr[i], arr[max] = arr[max], arr[i]
		heapify(arr, heapSize, max)
	}
}

func heapSort(arr []int) []int{
	buildMaxHeap(arr)

	for i := len(arr) - 1; i > 0; i-- {
		arr[0], arr[i] = arr[i], arr[0]
		heapify(arr, i, 0)
	}

	return arr
}

func testHeapSort() {
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
		result := heapSort(input)

		fmt.Printf(
			"Input: %v\nResult: %v, Expected: %v\n\n",
			testCase.input,
			result,
			testCase.expected,
		)
	}
}

func main() {
	testHeapSort()
}