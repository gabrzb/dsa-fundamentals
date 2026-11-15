# Asymptotic Analysis

Algorithm analysis describes how resource use grows with input size. Given an implementation, an input contract and a cost model, the result is a bound on time or memory. A bound describes the code's work; tests check its results but cannot prove its growth rate.

## How it works

Choose the input size before counting. Here `n` is an array length or string length, `L` is the total number of characters across `n` words, `V` is the number of graph vertices and `E` is the number of adjacency-list entries. Count scalar comparisons, assignments and arithmetic as constant-time operations on bounded machine values. Hash-table bounds below assume expected constant-time operations. Arbitrarily large Python integers require a separate bit-cost analysis.

For a nonnegative cost function `T(n)` and positive comparison function `g(n)`, the definitions apply after some fixed threshold `n0`:

| Notation | Required constants and inequality | Meaning |
| --- | --- | --- |
| `T(n) = O(g(n))` | Some `c > 0` satisfies `T(n) <= c * g(n)` for every `n >= n0` | Upper bound |
| `T(n) = Ω(g(n))` | Some `c > 0` satisfies `T(n) >= c * g(n)` for every `n >= n0` | Lower bound |
| `T(n) = Θ(g(n))` | Some `c1, c2 > 0` satisfy `c1 * g(n) <= T(n) <= c2 * g(n)` for every `n >= n0` | Tight bound |

For example, `3n + 2` lies between `3n` and `5n` for `n >= 1`, so it is `Θ(n)`. It is also `O(n²)`, but that upper bound is less informative. Changing a logarithm's fixed base changes a constant factor, so `Θ(log n)` needs no base.

First choose which cost function you mean: best case is the minimum over valid inputs of size `n`; worst case is the maximum; average case needs an input distribution. Expected cost averages over the stated source of randomness, such as hash-table behavior. Big O does not itself mean worst case, and Ω does not mean best case. A worst-case function can have both upper and lower bounds.

Consider the existing linear search:

```c
linearSearch(values, target) {
    for (i = 0; i < length(values); i++) {
        if (values[i] == target) {
            return i;
        }
    }
    return -1;
}
```

For `[2, 7, 11, 15]`, searching for `11` compares `2`, `7`, then `11` and returns index 2. Before iteration `i`, the target is absent from indices before `i`; returning on equality or exhausting the array therefore gives the correct result. Searching for `2` makes one comparison. Searching for an absent value makes four. For nonempty arrays, best-case time is `Θ(1)` and worst-case time is `Θ(n)`. An empty array returns `-1` without an element comparison and still takes constant overhead.

Add costs of consecutive phases and count the actual iterations of nested loops. Bubble sort makes `(n - 1) + (n - 2) + ... + 1 = n(n - 1)/2` comparisons even on sorted input because these versions have no early-exit flag. In contrast, the nested walk in Longest Consecutive Sequence visits each distinct value only once across all run extensions. Its expected total is linear.

The usual growth order is `1`, `log n`, `sqrt(n)`, `n`, `n log n`, `n²`, `2^n`, then `n!`. This compares growth as `n` increases, not elapsed time for a particular small input.

## Costs and project code

The following review covers the existing algorithm families. Bounds refer to valid inputs, with constant overhead for empty inputs. Auxiliary space excludes the caller's input and retained result, but includes temporary copies and recursive frames. `h` is tree height in levels, `r` and `c` are maze dimensions, `d >= 1` counts the maximum number of decimal digits, `k` is a combination size and `S` counts N-Queens solutions.

| Existing algorithm | Time | Auxiliary space and implementation detail |
| --- | --- | --- |
| [Linear search](../linear_search/Linear%20Search.md) | Best `Θ(1)`; worst `Θ(n)` | `Θ(1)` |
| [Binary search](../binary_search/Binary%20Search.md) | Best `Θ(1)`; worst `Θ(log(n + 1))` | `Θ(1)`; iterative, no recursive frames |
| [Bubble sort](../bubble_sort/Bubble%20Sort.md) | Best and worst `Θ(n²)` | `Θ(1)`; no early stop |
| [Insertion sort](../insertion_sort/Insertion%20Sort.md) | Best `Θ(n)`; worst `Θ(n²)` | `Θ(1)`; a sorted prefix avoids swaps |
| [Selection sort](../selection_sort/Selection%20Sort.md) | Best and worst `Θ(n²)` | `Θ(1)`; scan each remaining suffix |
| [Merge sort](../merge_sort/Merge%20Sort.md) | Go/Python `Θ(n log n)`; TypeScript `O(n²)` with linear-cost front removals | `O(n)` peak temporary storage; `O(log n)` frames |
| [Quick sort](../quick_sort/Quick%20Sort.md) | Balanced `Θ(n log n)`; worst `Θ(n²)` | Balanced `Θ(log n)` frames; worst `Θ(n)`; last-element pivot |
| [Heap sort](../heap_sort/Heap%20Sort.md) | Worst `Θ(n log n)` | `O(log n)` recursive heapify frames; array rearranged in place |
| [Radix sort](../radix_sort/Radix%20Sort.md) | `O(d(n + 19))` | `O(n + 19)` temporary arrays; 19 signed-digit buckets |
| [Maze search](../recursion/Recursion%20and%20Maze%20Search.md) | `Θ(rc)` initialization plus at most `O(rc)` search | `O(rc)` seen marks, path and frames |
| [Two pointers](../two_pointers/Two%20Pointers.md) | `Θ(n)` reversal | `Θ(1)`; pointers converge |
| [Fixed sliding window](../sliding_window/Sliding%20Window.md) | `Θ(n)` for valid window sizes | `Θ(1)`; add entering and subtract leaving value |
| [Prefix sums](../prefix_sum/Prefix%20Sum.md) | `Θ(n)` construction; `Θ(1)` per query | `O(1)` beyond the `Θ(n)` constructed result |
| [Subsets](../subsets/Subsets.md) | `O(n * 2^n)` worst case | `O(n)` beyond output; distinct input yields `Θ(n * 2^n)` output entries |
| [Permutations](../permutations/Permutations.md) | `O(n * n!)` worst case | `O(n)` beyond output; distinct input yields `Θ(n * n!)` output entries |
| [Combinations](../combinations/Combinations.md) | `Θ(k * C(n,k))` for `1 <= k <= n` | `O(k)` beyond output; `k = 0` returns `[[]]`; `k > n` returns `[]` |
| [N queens](../n_queens/N%20Queens.md) | `O(n * n! + S * n)` upper bound | `O(n)` beyond `O(S * n)` output; constant-time conflict checks |

Sorting before subset or permutation generation adds `O(n log n)` under a comparison-sort model; the displayed worst-case enumeration bounds dominate it. Duplicate pruning can reduce the output. TypeScript's built-in sorting costs depend on the runtime; these are algorithmic comparison-sort bounds, not language guarantees.

The data-structure review uses `N` stored entries, `B` buckets, `a` key length, `w` maximum tree width and fixed positive initial capacities. Construction and retained storage are separate from one operation's temporary memory.

| Existing structure or traversal | Cost of the actual operation |
| --- | --- |
| [Static array](../../../data_structures/theory/arrays/static_arrays/Static%20Array.md) | Indexed access `Θ(1)`; shifting insertion/deletion `O(N)`; allocation `Θ(capacity)` |
| [Dynamic array](../../../data_structures/theory/arrays/dynamic_arrays/Dynamic%20Array.md) | Append amortized `Θ(1)`, resize append `Θ(N)`; find/delete worst `Θ(N)` |
| [Chained hash map](../../../data_structures/theory/hashmaps/Hash%20Map.md) | Hashing `Θ(a)`; expected `O(1 + N/B)` bucket comparisons under uniform distribution; no resizing. String equality can add key-length work |
| [Union-Find](../../../data_structures/theory/union_find/Union%20Find.md) | `?(N)` initialization/storage; find and union amortized `O(?(N + 1))`, worst individual `O(log(N + 1))` |
| [Min heap](../../../data_structures/theory/heap/Heap.md) | Repair `O(log N)` frames/time; backing-array append can resize. Python removal copies `Θ(N)` elements and needs `Θ(N)` temporary storage |
| [LRU cache](../../../data_structures/theory/lru_cache/LRU%20Cache.md) | Expected `O(1)` lookup/update with native hash maps; `Θ(capacity)` retained entries when full |
| [Singly linked list](../../../data_structures/theory/linked_list/singly/Singly%20Linked%20List.md) | Prepend `Θ(1)`; append, search or removal by value worst `Θ(N)` because these versions keep only the head |
| [Doubly linked list](../../../data_structures/theory/linked_list/doubly/Doubly%20Linked%20List.md) | Endpoint insertion `Θ(1)`; index access/search worst `Θ(N)`; relinking a known node `Θ(1)` |
| [Queue](../../../data_structures/theory/queue/Queue.md), [stack](../../../data_structures/theory/stack/Stack.md) | Linked-node enqueue/dequeue and push/pop/peek `Θ(1)`; `Θ(N)` retained nodes |
| [Ring buffer](../../../data_structures/theory/ringbuffer/Ring%20Buffer.md) | Enqueue/dequeue/index access `Θ(1)`; fixed-capacity construction `Θ(capacity)` |
| [Tree nodes, comparison, search and DFS traversal](../../../data_structures/theory/tree/Binary%20Tree.md) | Node creation `Θ(1)`; comparison worst `Θ(N)` with early mismatch; BST search worst `O(h)`; full DFS `Θ(N)` plus output, using `O(h)` frames |
| [BST maintenance](../../../data_structures/theory/tree/bst/Binary%20Search%20Tree.md) | Insert/remove `O(h)` time and frames, worst `O(N)`; no balancing |
| [AVL tree](../../../data_structures/theory/tree/avl/AVL%20Tree.md) | Insert/remove worst `O(log(N + 1))` time and frames; cached heights and rotations |
| Tree BFS | Go worst `Θ(N)`; Python/TypeScript front removals can reach `O(N²)`; logical queue `O(w)`, while Go's slice may retain `O(N)` backing storage |
| [Matrix BFS](../../../data_structures/theory/graphs/Graph.md) | Worst `Θ(V²)` row scanning, `O(V)` auxiliary memory; TypeScript queue shifts stay within this time bound |
| [Adjacency-list BFS](../../../data_structures/theory/graphs/bfs_adj_list/Breadth%20First%20Search.md) | `O(V + E)` time including validation; `O(V)` auxiliary memory and shortest-edge-count path |
| Adjacency-list DFS | Worst `O(V + E)` including seen-array initialization; `O(V)` auxiliary memory and frames |
| [Connected components](../../../data_structures/theory/graphs/connected_components/Connected%20Components.md) | `O(V + E)` total time over all starts; `O(V)` auxiliary memory plus component output |
| [Cycle detection](../../../data_structures/theory/graphs/cycle_detection/Cycle%20Detection.md) | Directed/undirected `O(V + E)` time; `O(V)` explicit stack or queue; constant recursive depth |
| [Topological sort](../../../data_structures/theory/graphs/topological_sort/Topological%20Sort.md) | `O(V + E)` time; `O(V)` indegrees and queue; complete order or failure on a cycle |
| Dijkstra (linear selection) | Worst `O(V² + E)`; scans for the next minimum, with `O(V)` auxiliary memory; no heap in this version |
| [Heap Dijkstra](../../../data_structures/theory/graphs/dijkstra_heap/Heap%20Dijkstra.md) | `O(V + E log(E + 1))` time; `O(V + E)` arrays and lazy heap entries |
| [Kruskal](../../../data_structures/theory/graphs/kruskal/Kruskal.md) | `O(V + E log(E + 1) + E ?(V + 1))` time; `O(V + E)` copied edges and Union-Find storage |

Here `?` denotes the inverse Ackermann function in the Union-Find bounds.

Native maps used in problems and LRU are distinct from the educational fixed-bucket hash map. Its load factor `N/B` can grow without bound. No uniform collision distribution is promised by its deterministic hash function. Hashing a long key and comparing long strings are not constant-time operations.

Output must also be counted. Returning two indices costs constant space; returning every subset requires storing every saved path. Space analysis measures peak live memory, not the sum of all allocations over the entire run. See [recurrences](Recurrences.md), [amortized analysis](Amortized%20Analysis.md) and [call-stack space](Call%20Stack%20Space.md) for the corresponding derivations.

The ten problem explanations apply these rules to their own contracts and language variants: [Contains Duplicate](../../../../problems/contains_duplicate/SOLUTION.md), [Group Anagrams](../../../../problems/group_anagrams/SOLUTION.md), [Integer to Roman](../../../../problems/int_to_roman/SOLUTION.md), [Longest Consecutive Sequence](../../../../problems/longest_consecutive_sequence/SOLUTION.md), [Minimum Distance](../../../../problems/minimum_distance/SOLUTION.md), [Search Insert Position](../../../../problems/search_insert_position/SOLUTION.md), [Two Crystal Balls](../../../../problems/two_crystal_balls/SOLUTION.md), [Two Sum](../../../../problems/two_sum/SOLUTION.md), [Valid Anagram](../../../../problems/valid_anagram/SOLUTION.md) and [Valid Parentheses](../../../../problems/valid_parenthesis/SOLUTION.md).

Linear-search code: [Go](../../implementation/linear_search/golang/solution.go), [Python](../../implementation/linear_search/python/solution.py) and [TypeScript](../../implementation/linear_search/typescript/index.ts). The topic notes above link their implementation variants.
