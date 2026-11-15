def _validate(n):
    if not isinstance(n, int) or isinstance(n, bool) or not 0 <= n <= 45:
        raise ValueError("n must be an integer from 0 through 45")


def memoized(n: int) -> int:
    _validate(n)
    memo = [-1] * (n + 1)

    def ways(remaining):
        if remaining <= 1:
            return 1
        if memo[remaining] == -1:
            memo[remaining] = ways(remaining - 1) + ways(remaining - 2)
        return memo[remaining]

    return ways(n)


def tabulated(n: int) -> int:
    _validate(n)
    dp = [1] * (n + 1)
    for step in range(2, n + 1):
        dp[step] = dp[step - 1] + dp[step - 2]
    return dp[n]
