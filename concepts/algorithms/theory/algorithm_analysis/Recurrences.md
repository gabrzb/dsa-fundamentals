# Recurrences

A recurrence expresses an algorithm's cost using the costs of smaller subproblems plus work performed by the current call. Given the subproblem sizes, a base case and a cost model, solving it produces an asymptotic time bound. The recursive code determines which recurrence is valid.

## How it works

For merge sort, an array of at most one value returns immediately. Otherwise the code sorts two halves and merges them. With a linear merge, `T(n) = T(floor(n/2)) + T(ceil(n/2)) + Θ(n)`, with `T(0), T(1) = Θ(1)`. The nonrecursive term includes splitting when the language copies slices.

```c
mergeSort(values) {
    if (length(values) <= 1) {
        return values;
    }
    mid = floor(length(values) / 2);
    left = mergeSort(slice(values, 0, mid));
    right = mergeSort(slice(values, mid, length(values)));
    return mergeSorted(left, right);
}
```

For `[4, 1, 3, 2]`, actual call sizes in execution order are `4, 2, 1, 1, 2, 1, 1`. The left half returns `[1, 4]` before the right half returns `[2, 3]`; merging returns `[1, 2, 3, 4]`. The recurrence adds both children's costs even though they execute sequentially. Each recursive result is sorted, and merging always takes a smallest remaining value, so induction on input size proves the result is sorted and preserves the input's elements.

For powers of two, the recursion tree has `log2(n)` splitting levels. At level `j`, there are `2^j` subproblems of size `n/2^j`; their total linear work is `Θ(n)`. Adding the levels and the `Θ(n)` leaf calls gives `Θ(n log n)`. Floor and ceiling sizes do not change the bound.

The same method applies to other shapes:

| Recurrence with constant-size base cases | Expansion or level work | Result |
| --- | --- | --- |
| `T(n) = T(floor(n/2)) + Θ(1)` | One call per level; sizes halve | `Θ(log n)` |
| `T(n) = T(n - 1) + Θ(1)` | `n` constant-work levels | `Θ(n)` |
| `T(n) = 2T(n/2) + Θ(n)` | `Θ(n)` per level for logarithmically many levels | `Θ(n log n)` |
| `T(n) = T(n - 1) + Θ(n)` | `n + (n - 1) + ... + 1` | `Θ(n²)` |
| `T(n) = 2T(n/2) + Θ(n²)` | `n² + n²/2 + n²/4 + ...` | `Θ(n²)` |

To verify a proposed bound by substitution, insert it into the recurrence and show it holds for smaller inputs, adjusting constants and lower-order terms as needed, then check the base cases. Expansion suggests a bound; induction supplies its justification.

For regular equal-sized subproblems, the Master theorem summarizes this comparison. In `T(n) = aT(n/b) + f(n)`, with constants `a >= 1`, `b > 1` and nonnegative work `f`, compare `f(n)` with `n^(log_b(a))`. A polynomially smaller `f` gives `Θ(n^(log_b(a)))`. If `f = Θ(n^(log_b(a)) * log^k(n))` for `k >= 0`, the result is `Θ(n^(log_b(a)) * log^(k+1)(n))`. A polynomially larger `f` gives `Θ(f(n))` provided the regularity condition `a * f(n/b) <= c * f(n)` holds eventually for some `c < 1`. These cases require their stated hypotheses.

## Costs and project code

Go and Python merge sort use linear merges. Go advances slice headers without moving the underlying values; Python copies slices but still does only `Θ(n)` split and merge work per call. TypeScript removes the front of temporary arrays with `shift()`. Under a cost model where removing a front element moves the suffix, merging `n` values can cost `Θ(n²)`. Its recurrence then becomes `2T(n/2) + Θ(n²)`, giving `Θ(n²)` under that model. JavaScript engines may optimize array operations, so this is a bound for the described implementation model, not a measured runtime guarantee.

Quick sort instead satisfies `T(n) = T(p) + T(n - p - 1) + Θ(n)` when `p` values land before the pivot. Repeated balanced partitions give `Θ(n log n)`. Sorted input `[1, 2, 3, 4]` produces partition ranges `[0,3]`, `[0,2]`, `[0,1]` with pivots at indices 3, 2 and 1. This gives `T(n) = T(n - 1) + Θ(n) = Θ(n²)`. The fixed last-element pivot does not guarantee balanced partitions. Go uses strict `< pivot`; Python and TypeScript use `<= pivot`. All-equal inputs put the pivot at opposite extremes, but both choices give the same quadratic worst case.

The Master theorem's equal-size form does not apply to quick sort's arbitrary partition sizes or its `n - 1` worst-case reduction. An average `Θ(n log n)` claim needs an input model, such as uniformly random permutations of distinct values. These implementations do not randomize the pivot themselves.

Binary search's worst-case iteration count obeys `I(n) = I(floor(n/2)) + Θ(1)` for nonempty input. The project implements it with a loop, so that time recurrence does not imply recursive stack storage. Empty input exits in constant time.

Heap construction is another useful sum: most heap nodes are near the leaves and move only a short distance. Summing `O(n / 2^(j+1))` nodes with downward work `O(j)` gives `O(n)` build time, rather than multiplying `n` by the maximum `log n` repair depth. Subsequent extractions give heap sort's worst-case `Θ(n log n)` time.

Merge-sort code: [Go](../../implementation/merge_sort/golang/solution.go), [Python](../../implementation/merge_sort/python/solution.py), [TypeScript](../../implementation/merge_sort/typescript/index.ts). Quick-sort code: [Go](../../implementation/quick_sort/golang/solution.go), [Python](../../implementation/quick_sort/python/solution.py), [TypeScript](../../implementation/quick_sort/typescript/index.ts). Heap-sort code: [Go](../../implementation/heap_sort/golang/solution.go), [Python](../../implementation/heap_sort/python/solution.py), [TypeScript](../../implementation/heap_sort/typescript/index.ts).
