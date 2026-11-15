def _validate(weights, values, capacity):
    if not isinstance(capacity, int) or isinstance(capacity, bool) or capacity < 0:
        raise ValueError("capacity must be a nonnegative integer")
    if len(weights) != len(values):
        raise ValueError("weights and values must have equal lengths")
    if any(not isinstance(w, int) or isinstance(w, bool) or w <= 0 for w in weights):
        raise ValueError("weights must be positive integers")
    if any(not isinstance(v, int) or isinstance(v, bool) or v < 0 for v in values):
        raise ValueError("values must be nonnegative integers")


def memoized(weights: list[int], values: list[int], capacity: int) -> int:
    _validate(weights, values, capacity)
    n = len(weights)
    memo = [[-1] * (capacity + 1) for _ in range(n)]

    def best(index, remaining):
        if index == n:
            return 0
        if memo[index][remaining] == -1:
            result = best(index + 1, remaining)
            if weights[index] <= remaining:
                result = max(result, values[index] + best(index + 1, remaining - weights[index]))
            memo[index][remaining] = result
        return memo[index][remaining]

    return best(0, capacity)


def tabulated(weights: list[int], values: list[int], capacity: int) -> int:
    _validate(weights, values, capacity)
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    for index in range(n - 1, -1, -1):
        for remaining in range(capacity + 1):
            dp[index][remaining] = dp[index + 1][remaining]
            if weights[index] <= remaining:
                dp[index][remaining] = max(dp[index][remaining], values[index] + dp[index + 1][remaining - weights[index]])
    return dp[0][capacity]
