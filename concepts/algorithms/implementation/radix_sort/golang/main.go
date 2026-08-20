package main

import "fmt"

func checkNegative(arr []int) bool {
	for _, num := range arr {
		if num < 0 {
			return true
		}
	}
	
	return false	
}

func getMax(arr []int) int {
	mx := arr[0]

	for i := 1; i < len(arr); i++ {
		if arr[i] > mx {
			mx = arr[i]
		}
	}
	
	return mx
}

func countingSort(arr []int, exp int) []int {
	output := make([]int, len(arr))
	count := make([]int, 10)

	for i := range arr {
		count[(arr[i] / exp) % 10]++
	}

	for i := 1; i < len(count); i++ {
		count[i] += count[i-1]
	}

	for i := len(arr) - 1; i >= 0; i-- {
		digit := (arr[i] / exp) % 10
		
	    output[count[digit] - 1] = arr[i]
	    count[digit]--
	}

	return output
}

func radixSort(arr []int) []int {
	maxNum := getMax(arr)
	sortedArr := arr

	for exp := 1; maxNum/exp > 0; exp *= 10 {
		sortedArr = countingSort(sortedArr, exp)
	}

	return sortedArr
}

func testRadixSort() {
	testCases := []struct {
		input    []int
		expected []int
	}{
		{input: []int{-3, 0, 2, -1, 5}, expected: nil}, // Negative numbers are not supported in radix sort
		{input: []int{3, 1, 2, 3, 1}, expected: []int{1, 1, 2, 3, 3}},
		{input: []int{64, 34, 25, 12, 22, 11, 90}, expected: []int{11, 12, 22, 25, 34, 64, 90}},
	}

	for _, testCase := range testCases {
		input := make([]int, len(testCase.input))
		copy(input, testCase.input)

		if checkNegative(input) {
			fmt.Printf("Input: %v\nResult: Error\nExpected: %v\n\n", testCase.input, testCase.expected)
			continue
		}

		result := radixSort(input)

		fmt.Printf(
			"Input: %v\nResult: %v, Expected: %v\n\n",
			testCase.input,
			result,
			testCase.expected,
		)
	}
}

func main() {
	testRadixSort()
}