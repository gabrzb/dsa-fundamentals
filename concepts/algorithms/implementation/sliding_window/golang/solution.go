package solution

func maxWindowSum(values []int, size int) int {
	if size <= 0 || size > len(values) {
		panic("window size must be between 1 and the array length")
	}

	windowSum := 0

	for _, value := range values[:size] {
		windowSum += value
	}

	bestSum := windowSum

	for right := size; right < len(values); right++ {
		windowSum -= values[right-size]
		windowSum += values[right]
		bestSum = max(bestSum, windowSum)
	}

	return bestSum
}
