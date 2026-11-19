def memoized(a: str, b: str) -> int:
    m, n = len(a), len(b)
    memo = [[-1] * n for _ in range(m)]

    def best(i, j):
        if i == m or j == n:
            return 0
        if memo[i][j] == -1:
            if a[i] == b[j]:
                memo[i][j] = 1 + best(i + 1, j + 1)
            else:
                memo[i][j] = max(best(i + 1, j), best(i, j + 1))
        return memo[i][j]

    return best(0, 0)


def tabulated(a: str, b: str) -> int:
    m, n = len(a), len(b)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m - 1, -1, -1):
        for j in range(n - 1, -1, -1):
            if a[i] == b[j]:
                dp[i][j] = 1 + dp[i + 1][j + 1]
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j + 1])
    return dp[0][0]
