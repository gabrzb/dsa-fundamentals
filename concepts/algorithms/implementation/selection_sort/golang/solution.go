package solution

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
