package main

func binarySearch(arr []int, target int) int {
	low := 0
	high := len(arr)

	for low < high {
		mid := (low + high) / 2
		if arr[mid] == target {
			return mid
		} else if arr[mid] < target {
			low = mid + 1
		} else {
			high = mid
		}
	}

	return -1
}

func testBinarySearch(arr []int, target int) { 
	result := binarySearch(arr, target)
	
	if result != -1 {
		println("Element found at index:", result)
	} else {
		println("Element not found")
	}
}

func main() {
	arr := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	target := 5
	
	testBinarySearch(arr, target)

	arr2 := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
	target2 := 11
	
	testBinarySearch(arr2, target2)
}