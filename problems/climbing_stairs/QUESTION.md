# Climbing Stairs

Given an integer `n` from 0 through 45, return the number of ordered ways to climb exactly `n` stairs using steps of size one or two. Different orders count separately. There is one way to climb zero stairs: take no steps.

For `n = 3`, return 3: `[1, 1, 1]`, `[1, 2]` and `[2, 1]`. For `n = 5`, return 8.

Implement both memoization and tabulation. Reject integers outside the stated range. The bounded range keeps the answer within a signed 32-bit integer.
