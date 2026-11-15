# Dynamic Programming

Dynamic programming solves a problem by defining reusable subproblem states and combining their answers. Given a state, its answer must depend only on the information in that state and the fixed input. The result can be a count, minimum cost, maximum value or length, depending on the problem.

## How it works

Start by defining exactly what one state returns. Give the base cases, list the available decisions and write a recurrence using smaller states. The transitions must preserve enough information to describe the remaining choices. In climbing stairs, remaining height is enough; in a problem with limited-use items, the state must also distinguish which items are still available.

**Memoization** starts with the requested answer and follows its dependencies recursively. Store each completed answer, including legitimate zeroes and failures, using a separate marker for an uncomputed state. The next request for that state returns the saved result. This avoids repeating its entire recursive subtree.

**Tabulation** starts with base answers and visits states in an order where every dependency has already been computed. It applies the same recurrence using loops. A smaller numeric index is not always a prerequisite: suffix-based states depend on larger indices, so their loops run backward.

For [climbing stairs](../../../../problems/climbing_stairs/SOLUTION.md), both methods use `ways(r) = ways(r - 1) + ways(r - 2)`, with `ways(0) = ways(1) = 1`. Requesting height five recursively eventually saves counts 2, 3, 5 and 8 while returning through waiting calls. Tabulation initializes the bases and builds `[1, 1, 2, 3, 5, 8]` from left to right. The problem note shows the call returns, cache hits and table entries side by side.

```c
solve(state) {
    if (isBase(state)) {
        return baseAnswer(state);
    }
    if (memo[state] == UNCOMPUTED) {
        memo[state] = combine(solveEachDependency(state));
    }
    return memo[state];
}
```

This schematic pseudocode describes the common evaluation pattern, not an additional project implementation. Each problem supplies its own dependency enumeration and combination rule. A count sums disjoint choices; a minimum ignores impossible choices; a maximum compares feasible alternatives. Prove that these choices cover all valid solutions, then use induction in dependency order to show that combining correct smaller answers gives the correct current answer.

Memoization terminates when transitions move toward a base case and cached completed states are never expanded again. It is not a general cycle solver: caching only after recursion returns cannot resolve a dependency cycle. Positive coin denominations and increasing item/string indices provide decreasing or bounded progress measures in the problem implementations.

## Costs and project code

Count the number of possible states, multiply by work per evaluated state, then include table initialization, input conversion and output. Do not infer constant memory from a short recurrence. A dense cache may allocate all possible entries even if memoization requests only a few. Recursive call depth is a separate cost from the number of stored answers; tabulation removes those recursive frames but still retains its table.

The introductory project example uses a fresh array cache per call and an explicit uncomputed marker. Its memoized and tabulated implementations are together in [Go](../../../../problems/climbing_stairs/golang/solution.go), [Python](../../../../problems/climbing_stairs/python/solution.py) and [TypeScript](../../../../problems/climbing_stairs/typescript/index.ts). See [recurrences](../algorithm_analysis/Recurrences.md) and [call-stack space](../algorithm_analysis/Call%20Stack%20Space.md) for the difference between recursive work and simultaneous storage.

| Project example | Meaning of a state | Choice and dependency order |
| --- | --- | --- |
| [Climbing Stairs](../../../../problems/climbing_stairs/SOLUTION.md) | Count ways for remaining height `r` | Sum one-step and two-step branches; tabulate increasing heights |
| [Coin Change](../../../../problems/coin_change/SOLUTION.md) | Fewest reusable coins for remainder `r` | Minimize reachable predecessor plus one; tabulate increasing amounts |
| [0/1 Knapsack](../../../../problems/knapsack/SOLUTION.md) | Maximum value from item index `i` with capacity `c` | Maximize skip versus take, advancing the item in both; tabulate decreasing item indices |
| [Longest Common Subsequence](../../../../problems/longest_common_subsequence/SOLUTION.md) | Longest common subsequence of suffixes at `i` and `j` | Match both characters or maximize the two skips; tabulate decreasing string indices |
