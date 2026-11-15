# 0/1 Knapsack

Given equally sized integer arrays `weights` and `values`, and a nonnegative integer `capacity`, return the maximum total value of a subset whose total weight is at most capacity. Item `i` has weight `weights[i]` and value `values[i]`; each item may be chosen at most once. Weights must be positive and values nonnegative. Distinct indices are distinct items even if their weights and values match. The empty subset is allowed.

For `weights = [2, 3, 4]`, `values = [4, 5, 7]` and `capacity = 5`, return 9 by choosing the first two items. For one weight-2, value-3 item and capacity 4, return 3, not 6.

Implement memoization and tabulation, returning only the maximum value. Reject unequal lengths, nonpositive weights, negative values or negative capacity. Inputs and total values must fit the language's integer representation; use safe integers in TypeScript. Preserve both input arrays.
