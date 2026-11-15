package solution

func Memoized(a, b string) int {
	left, right := []rune(a), []rune(b)
	m, n := len(left), len(right)
	memo := make([][]int, m)
	for i := range memo {
		memo[i] = make([]int, n)
		for j := range memo[i] {
			memo[i][j] = -1
		}
	}
	var best func(int, int) int
	best = func(i, j int) int {
		if i == m || j == n {
			return 0
		}
		if memo[i][j] == -1 {
			if left[i] == right[j] {
				memo[i][j] = 1 + best(i+1, j+1)
			} else {
				memo[i][j] = max(best(i+1, j), best(i, j+1))
			}
		}
		return memo[i][j]
	}
	return best(0, 0)
}

func Tabulated(a, b string) int {
	left, right := []rune(a), []rune(b)
	m, n := len(left), len(right)
	dp := make([][]int, m+1)
	for i := range dp {
		dp[i] = make([]int, n+1)
	}
	for i := m - 1; i >= 0; i-- {
		for j := n - 1; j >= 0; j-- {
			if left[i] == right[j] {
				dp[i][j] = 1 + dp[i+1][j+1]
			} else {
				dp[i][j] = max(dp[i+1][j], dp[i][j+1])
			}
		}
	}
	return dp[0][0]
}
