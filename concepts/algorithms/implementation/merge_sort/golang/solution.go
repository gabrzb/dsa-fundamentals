package solution

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
