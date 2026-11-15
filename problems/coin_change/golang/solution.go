package solution

func validate(coins []int, amount int) {
	if amount < 0 || amount == int(^uint(0)>>1) {
		panic("amount must be nonnegative with representable amount + 1")
	}
	for _, coin := range coins {
		if coin <= 0 {
			panic("coins must be positive")
		}
	}
}

func Memoized(coins []int, amount int) int {
	validate(coins, amount)
	unreachable := amount + 1
	memo := make([]int, amount+1)
	for i := range memo {
		memo[i] = -1
	}
	memo[0] = 0
	var best func(int) int
	best = func(remaining int) int {
		if memo[remaining] != -1 {
			return memo[remaining]
		}
		result := unreachable
		for _, coin := range coins {
			if coin <= remaining {
				previous := best(remaining - coin)
				if previous != unreachable {
					result = min(result, 1+previous)
				}
			}
		}
		memo[remaining] = result
		return result
	}
	result := best(amount)
	if result == unreachable {
		return -1
	}
	return result
}

func Tabulated(coins []int, amount int) int {
	validate(coins, amount)
	unreachable := amount + 1
	dp := make([]int, amount+1)
	for i := range dp {
		dp[i] = unreachable
	}
	dp[0] = 0
	for subtotal := 1; subtotal <= amount; subtotal++ {
		for _, coin := range coins {
			if coin <= subtotal {
				previous := dp[subtotal-coin]
				if previous != unreachable {
					dp[subtotal] = min(dp[subtotal], 1+previous)
				}
			}
		}
	}
	if dp[amount] == unreachable {
		return -1
	}
	return dp[amount]
}
