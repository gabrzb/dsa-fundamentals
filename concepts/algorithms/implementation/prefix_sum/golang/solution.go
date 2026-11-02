package solution

func prefixSums(values []int) []int {
	prefix := make([]int, len(values)+1)
	for index, value := range values {
		prefix[index+1] = prefix[index] + value
	}
	return prefix
}

func rangeSum(prefix []int, start, end int) int {
	if start < 0 || start > end || end >= len(prefix) {
		panic("range must satisfy 0 <= start <= end <= array length")
	}
	return prefix[end] - prefix[start]
}
