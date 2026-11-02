package solution

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
