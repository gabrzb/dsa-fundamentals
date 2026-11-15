# Coin Change

Given positive integer coin denominations and a nonnegative integer `amount`, return the minimum number of coins whose sum is exactly `amount`. Each denomination may be used any number of times. Return `-1` if the amount is unreachable. Amount zero needs zero coins, including when the denomination list is empty. Duplicate denominations are allowed.

For `coins = [1, 3, 4]` and `amount = 6`, return 2 using `3 + 3`. For `[2]` and amount 3, return `-1`.

Implement memoization and tabulation. Reject negative amounts and nonpositive denominations. Inputs and results must fit the language's integer representation; use safe integers in TypeScript. The functions preserve the denomination list.
