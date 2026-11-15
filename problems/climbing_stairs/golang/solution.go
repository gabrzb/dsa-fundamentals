package solution

func validate(n int) {
	if n < 0 || n > 45 {
		panic("n must be from 0 through 45")
	}
}

func Memoized(n int) int {
	validate(n)
	memo := make([]int, n+1)
	for i := range memo {
		memo[i] = -1
	}
	var ways func(int) int
	ways = func(remaining int) int {
		if remaining <= 1 {
			return 1
		}
		if memo[remaining] == -1 {
			memo[remaining] = ways(remaining-1) + ways(remaining-2)
		}
		return memo[remaining]
	}
	return ways(n)
}

func Tabulated(n int) int {
	validate(n)
	dp := make([]int, n+1)
	dp[0] = 1
	for step := 1; step <= n; step++ {
		dp[step] = dp[step-1]
		if step >= 2 {
			dp[step] += dp[step-2]
		}
	}
	return dp[n]
}
