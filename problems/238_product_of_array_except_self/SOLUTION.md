# Product of Array Except Self

Given an integer array `nums`, return an array whose entry at index `i` is the product of the values at every other index. Each result combines the product strictly to its left and the product strictly to its right. See the [problem statement](QUESTION.md).

## How it works

Scan from left to right with a running product `left` initialized to `1`. At each index `i`, save `left` in `ans[i]`, then multiply `left` by `nums[i]`. Saving first leaves the current element out of its own prefix product.

After that pass, scan from the last index down to index `1`, with `right` initialized to `1`. First multiply `right` by `nums[i]`, then multiply `ans[i - 1]` by `right`. The update goes one position to the left because the suffix now starts at `i). The final output position already has its full answer after the first pass. Its right side is empty, so its suffix product is `1`.

For `[1, 2, 3, 4]`, the forward pass writes `1`, `1`, `2`, and `6` in order. The backward pass starts with those values and updates one position at a time.

| Backward index `i` | Updated `right` | Write | `ans` after the write |
| --- | --- | --- | --- |
| `3` | `1 × 4 = 4` | `ans[2] = 2 × 4` | `[1, 1, 8, 6]` |
| `2` | `4 × 3 = 12` | `ans[1] = 1 × 12` | `[1, 12, 8, 6]` |
| `1` | `12 × 2 = 24` | `ans[0] = 1 × 24` | `[24, 12, 8, 6]` |

```c
productExceptSelf(nums) {
    n = length(nums);
    if (n < 2) {
        return nums;
    }

    ans = array(n);
    left = 1;
    right = 1;

    for (i = 0; i < n; i++) {
        ans[i] = left;
        left *= nums[i];
    }

    for (i = n - 1; i > 0; i--) {
        right *= nums[i];
        ans[i - 1] *= right;
    }

    return ans;
}
```

Before each forward iteration, `left` is the product of indices `0` through `i - 1`. Before each backward iteration, `right` is the product of indices strictly after `i`. Including `nums[i]` extends that product to cover exactly the indices after `i - 1`. The prefix already stored at `ans[i - 1]` and this suffix together include every index except `i - 1` exactly once.

With one zero, only the zero's own position can have a nonzero result. With two or more zeros, every result is zero. Negative and repeated values use the same multiplication steps. All three implementations return inputs shorter than two elements directly, outside the statement's length bounds.

## Costs and project code

For an input of length `n`, the forward pass visits `n` positions and the backward pass visits `n - 1`. Each iteration does constant work, giving `O(n)` time. The output takes `O(n)` space and also holds the prefix products. The two accumulators and loop indices take `O(1)` auxiliary space.

Go reserves capacity for the result before appending. Python and TypeScript allocate the output length up front. TypeScript stores zeros as positive zero so the results match the integer outputs.

Implementations in [Go](golang/solution.go), [Python](python/solution.py), and [TypeScript](typescript/index.ts).
