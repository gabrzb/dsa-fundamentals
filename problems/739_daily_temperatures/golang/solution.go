package solution

func dailyTemperatures(temperatures []int) []int {
	var stack []int
	answer := make([]int, len(temperatures))

	for i := 0; i < len(temperatures); i++ {
		for len(stack) > 0 && temperatures[i] > temperatures[stack[len(stack)-1]] {
			stackIndex := stack[len(stack)-1]
			answer[stackIndex] = i - stackIndex
			stack = stack[:len(stack)-1]
		}

		stack = append(stack, i)
	}

	return answer
}
