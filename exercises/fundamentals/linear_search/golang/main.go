package main

import "fmt"

func linearSearch(arr []int, target int) int {
	for i, value := range arr {
		if value == target {
			return i
		}
	}

	return -1
}

func testLinearSearch(arr []int, target int) {
	result := linearSearch(arr, target)

	if result != -1 {
		fmt.Println("Element found at index:", result)
	} else {
		fmt.Println("Element not found")
	}
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	target := 5

	testLinearSearch(arr, target)

	arr2 := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	target2 := 11

	testLinearSearch(arr2, target2)
}