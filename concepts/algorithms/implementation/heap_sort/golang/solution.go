package solution

func buildMaxHeap(arr []int) {
	for i := len(arr)/2 - 1; i >= 0; i-- {
		heapify(arr, len(arr), i)
	}
}

func heapify(arr []int, heapSize int, i int) {
	left := 2*i + 1
	right := 2*i + 2
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

func heapSort(arr []int) []int {
	buildMaxHeap(arr)

	for i := len(arr) - 1; i > 0; i-- {
		arr[0], arr[i] = arr[i], arr[0]
		heapify(arr, i, 0)
	}

	return arr
}
