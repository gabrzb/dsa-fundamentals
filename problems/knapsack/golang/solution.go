package solution

func validate(weights, values []int, capacity int) {
	if capacity < 0 || capacity == int(^uint(0)>>1) {
		panic("capacity must be nonnegative with representable capacity + 1")
	}
	if len(weights) != len(values) {
		panic("weights and values must have equal lengths")
	}
	total := 0
	for i, weight := range weights {
		if weight <= 0 || values[i] < 0 {
			panic("weights must be positive and values nonnegative")
		}
		if values[i] > int(^uint(0)>>1)-total {
			panic("total item value must fit int")
		}
		total += values[i]
	}
}

func Memoized(weights, values []int, capacity int) int {
	validate(weights, values, capacity)
	n := len(weights)
	memo := make([][]int, n)
	for i := range memo {
		memo[i] = make([]int, capacity+1)
		for c := range memo[i] {
			memo[i][c] = -1
		}
	}
	var best func(int, int) int
	best = func(index, remaining int) int {
		if index == n {
			return 0
		}
		if memo[index][remaining] == -1 {
			result := best(index+1, remaining)
			if weights[index] <= remaining {
				result = max(result, values[index]+best(index+1, remaining-weights[index]))
			}
			memo[index][remaining] = result
		}
		return memo[index][remaining]
	}
	return best(0, capacity)
}

func Tabulated(weights, values []int, capacity int) int {
	validate(weights, values, capacity)
	n := len(weights)
	dp := make([][]int, n+1)
	for i := range dp {
		dp[i] = make([]int, capacity+1)
	}
	for index := n - 1; index >= 0; index-- {
		for remaining := 0; remaining <= capacity; remaining++ {
			dp[index][remaining] = dp[index+1][remaining]
			if weights[index] <= remaining {
				dp[index][remaining] = max(dp[index][remaining], values[index]+dp[index+1][remaining-weights[index]])
			}
		}
	}
	return dp[0][capacity]
}
