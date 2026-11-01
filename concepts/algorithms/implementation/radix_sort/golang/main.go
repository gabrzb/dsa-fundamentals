package solution

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
		count[(arr[i]/exp)%10]++
	}

	for i := 1; i < len(count); i++ {
		count[i] += count[i-1]
	}

	for i := len(arr) - 1; i >= 0; i-- {
		digit := (arr[i] / exp) % 10

		output[count[digit]-1] = arr[i]
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
