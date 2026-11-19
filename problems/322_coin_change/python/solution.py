def _validate(coins, amount):
    if not isinstance(amount, int) or isinstance(amount, bool) or amount < 0:
        raise ValueError("amount must be a nonnegative integer")
    if any(not isinstance(c, int) or isinstance(c, bool) or c <= 0 for c in coins):
        raise ValueError("coins must be positive integers")


def memoized(coins: list[int], amount: int) -> int:
    _validate(coins, amount)
    unreachable = amount + 1
    memo = [-1] * (amount + 1)
    memo[0] = 0

    def best(remaining):
        if memo[remaining] != -1:
            return memo[remaining]
        result = unreachable
        for coin in coins:
            if coin <= remaining:
                previous = best(remaining - coin)
                if previous != unreachable:
                    result = min(result, 1 + previous)
        memo[remaining] = result
        return result

    result = best(amount)
    return -1 if result == unreachable else result


def tabulated(coins: list[int], amount: int) -> int:
    _validate(coins, amount)
    unreachable = amount + 1
    dp = [unreachable] * (amount + 1)
    dp[0] = 0
    for subtotal in range(1, amount + 1):
        for coin in coins:
            if coin <= subtotal:
                previous = dp[subtotal - coin]
                if previous != unreachable:
                    dp[subtotal] = min(dp[subtotal], 1 + previous)
    return -1 if dp[amount] == unreachable else dp[amount]
