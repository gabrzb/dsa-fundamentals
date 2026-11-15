package solution

func NextGreaterIndices(values []int) []int {
	result := make([]int, len(values))
	for i := range result {
		result[i] = -1
	}
	stack := []int{}
	for index, value := range values {
		for len(stack) > 0 && values[stack[len(stack)-1]] < value {
			last := len(stack) - 1
			result[stack[last]] = index
			stack = stack[:last]
		}
		stack = append(stack, index)
	}
	return result
}
