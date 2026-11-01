package solution

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
