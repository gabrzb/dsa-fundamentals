package solution

func countingSort(arr []int, exp int) []int {
	output := make([]int, len(arr))
	count := make([]int, 19)

	for i := range arr {
		count[(arr[i]/exp)%10+9]++
	}

	for i := 1; i < len(count); i++ {
		count[i] += count[i-1]
	}

	for i := len(arr) - 1; i >= 0; i-- {
		digit := (arr[i]/exp)%10 + 9

		output[count[digit]-1] = arr[i]
		count[digit]--
	}

	return output
}

func radixSort(arr []int) []int {
	if len(arr) == 0 {
		return []int{}
	}
	lowest, highest := arr[0], arr[0]
	for _, value := range arr {
		lowest = min(lowest, value)
		highest = max(highest, value)
	}
	sortedArr := arr

	for exp := 1; ; exp *= 10 {
		sortedArr = countingSort(sortedArr, exp)
		if lowest/exp > -10 && highest/exp < 10 {
			return sortedArr
		}
	}
}
