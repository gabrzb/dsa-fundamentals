# Data Structures and Algorithms

A collection of data structures, algorithms, and coding problems implemented in Go, TypeScript and Python. The repository is intended as a practical study resource, combining illustrated theory notes with importable implementations and automated unit tests.

## Contents

Each topic links to its explanation, which includes the project implementations.

### Algorithm analysis

- [Big O, Ω and Θ; implementation and problem complexity review](concepts/algorithms/theory/algorithm_analysis/Asymptotic%20Analysis.md)
- [Amortized analysis: aggregate, accounting and potential methods](concepts/algorithms/theory/algorithm_analysis/Amortized%20Analysis.md)
- [Recurrences: expansion, substitution and Master theorem](concepts/algorithms/theory/algorithm_analysis/Recurrences.md)
- [Call-stack space, recursion depth and retained output](concepts/algorithms/theory/algorithm_analysis/Call%20Stack%20Space.md)

### Algorithms

| Topic | Time complexity |
| --- | --- |
| [Linear search](concepts/algorithms/theory/linear_search/Linear%20Search.md) | `O(n)` |
| [Binary search](concepts/algorithms/theory/binary_search/Binary%20Search.md) | `O(log n)` |
| [Bubble sort](concepts/algorithms/theory/bubble_sort/Bubble%20Sort.md) | `O(n^2)` |
| [Insertion sort](concepts/algorithms/theory/insertion_sort/Insertion%20Sort.md) | `O(n^2)` |
| [Selection sort](concepts/algorithms/theory/selection_sort/Selection%20Sort.md) | `O(n^2)` |
| [Merge sort](concepts/algorithms/theory/merge_sort/Merge%20Sort.md) | `O(n log n)`; TypeScript front removals can reach `O(n^2)` |
| [Quick sort](concepts/algorithms/theory/quick_sort/Quick%20Sort.md) | Average `O(n log n)`; worst-case `O(n^2)` |
| [Heap sort](concepts/algorithms/theory/heap_sort/Heap%20Sort.md) | Worst-case `O(n log n)` |
| [Radix sort (signed integers)](concepts/algorithms/theory/radix_sort/Radix%20Sort.md) | `O(d(n + b))` for `d` digits and `b = 19` buckets |
| [Recursive maze solver](concepts/algorithms/theory/recursion/Recursion%20and%20Maze%20Search.md) | `O(r * c)` for `r` rows and `c` columns |
| [Two pointers (array reversal)](concepts/algorithms/theory/two_pointers/Two%20Pointers.md) | `O(n)` |
| [Sliding window (maximum fixed-window sum)](concepts/algorithms/theory/sliding_window/Sliding%20Window.md) | `O(n)` |
| [Prefix sum](concepts/algorithms/theory/prefix_sum/Prefix%20Sum.md) | `O(n)` construction; `O(1)` range query |
| [Subsets](concepts/algorithms/theory/subsets/Subsets.md) | `O(n * 2^n)` worst-case, including output |
| [Permutations](concepts/algorithms/theory/permutations/Permutations.md) | `O(n * n!)` worst-case, including output |
| [Combinations](concepts/algorithms/theory/combinations/Combinations.md) | `O(k * C(n, k))` for `0 < k <= n`, including output |
| [N queens](concepts/algorithms/theory/n_queens/N%20Queens.md) | `O(n * n! + S * n)` upper bound for `S` solutions |

### Data structures

| Data structure | Typical operation complexity |
| --- | --- |
| [Static array](concepts/data_structures/theory/arrays/static_arrays/Static%20Array.md) | `O(1)` access; `O(n)` insertion and deletion |
| [Dynamic array](concepts/data_structures/theory/arrays/dynamic_arrays/Dynamic%20Array.md) | `O(1)` access; amortized `O(1)` append |
| [Hash map](concepts/data_structures/theory/hashmaps/Hash%20Map.md) | Expected `O(1 + n/b)` bucket work for `b` fixed buckets; worst `O(n)`, plus key costs |
| [Union-Find](concepts/data_structures/theory/union_find/Union%20Find.md) | Amortized `O(?(n + 1))` find/union; `O(n)` storage |
| [Min heap](concepts/data_structures/theory/heap/Heap.md) | `O(log n)` repair; Python removal adds `O(n)` copying |
| [LRU cache](concepts/data_structures/theory/lru_cache/LRU%20Cache.md) | Expected `O(1)` lookup and update |
| [Singly linked list](concepts/data_structures/theory/linked_list/singly/Singly%20Linked%20List.md) | `O(1)` insertion at head; `O(n)` access |
| [Doubly linked list](concepts/data_structures/theory/linked_list/doubly/Doubly%20Linked%20List.md) | `O(1)` insertion at head or tail; `O(n)` access |
| [Queue](concepts/data_structures/theory/queue/Queue.md) | `O(1)` enqueue, dequeue, and peek |
| [Ring buffer](concepts/data_structures/theory/ringbuffer/Ring%20Buffer.md) | `O(1)` enqueue, dequeue, and logical-index access |
| [Stack](concepts/data_structures/theory/stack/Stack.md) | `O(1)` push, pop, and peek |
| [Graph breadth-first search (adjacency matrix)](concepts/data_structures/theory/graphs/Graph.md) | `O(V^2)` time; `O(V)` auxiliary space |
| [Graph breadth-first search (adjacency list)](concepts/data_structures/theory/graphs/bfs_adj_list/Breadth%20First%20Search.md) | `O(V + E)` time; `O(V)` auxiliary space |
| [Graph depth-first search (adjacency list)](concepts/data_structures/theory/graphs/Graph.md) | `O(V + E)` time; `O(V)` auxiliary space |
| [Connected components](concepts/data_structures/theory/graphs/connected_components/Connected%20Components.md) | `O(V + E)` time; `O(V)` auxiliary space |
| [Cycle detection](concepts/data_structures/theory/graphs/cycle_detection/Cycle%20Detection.md) | Directed and undirected: `O(V + E)` time; `O(V)` auxiliary space |
| [Topological sort](concepts/data_structures/theory/graphs/topological_sort/Topological%20Sort.md) | `O(V + E)` time; `O(V)` auxiliary space |
| [Dijkstra shortest path (linear selection)](concepts/data_structures/theory/graphs/Graph.md) | `O(V^2 + E)` time; `O(V)` auxiliary space |
| [Dijkstra shortest path (min heap)](concepts/data_structures/theory/graphs/dijkstra_heap/Heap%20Dijkstra.md) | `O(V + E log(E + 1))` time; `O(V + E)` auxiliary space |
| [Kruskal minimum spanning forest](concepts/data_structures/theory/graphs/kruskal/Kruskal.md) | `O(V + E log(E + 1) + E ?(V + 1))` time; `O(V + E)` auxiliary space |
| [Prim minimum spanning forest](concepts/data_structures/theory/graphs/prim/Prim.md) | `O(V + E log(E + 1))` time; `O(V + E)` auxiliary space |
| [Binary tree base](concepts/data_structures/theory/tree/Binary%20Tree.md) | `O(1)` node creation and access |
| [Binary search tree maintenance](concepts/data_structures/theory/tree/bst/Binary%20Search%20Tree.md) | `O(h)` insertion/removal; worst `O(n)` |
| [AVL tree](concepts/data_structures/theory/tree/avl/AVL%20Tree.md) | Worst-case `O(log(n + 1))` insertion/removal with rebalancing |
| [Binary tree comparison](concepts/data_structures/theory/tree/Binary%20Tree.md) | `O(n)` time; `O(h)` recursion space |
| [Binary tree depth-first search](concepts/data_structures/theory/tree/Binary%20Tree.md) | BST search: `O(h)`; worst-case `O(n)` |
| [Binary tree breadth-first search](concepts/data_structures/theory/tree/Binary%20Tree.md) | `O(n)` with FIFO queue; Python/TypeScript front removal can reach `O(n^2)` |
| [Binary tree depth-first traversal](concepts/data_structures/theory/tree/Binary%20Tree.md) | `O(n)` time; `O(h)` recursion space |

### Dynamic programming

[Memoization and tabulation](concepts/algorithms/theory/dynamic_programming/Dynamic%20Programming.md) explain how state definitions, base cases and dependency order produce reusable answers. The problem implementations below keep both approaches together.

### Problems

| Problem | Main technique |
| --- | --- |
| [Climbing Stairs](problems/climbing_stairs/SOLUTION.md) | Memoization / tabulation |
| [Coin Change](problems/coin_change/SOLUTION.md) | Memoization / tabulation |
| [0/1 Knapsack](problems/knapsack/SOLUTION.md) | Memoization / tabulation |
| [Longest Common Subsequence](problems/longest_common_subsequence/SOLUTION.md) | Memoization / tabulation |
| [Contains Duplicate](problems/contains_duplicate/SOLUTION.md) | Hash set |
| [Group Anagrams](problems/group_anagrams/SOLUTION.md) | Frequency counting / hash map |
| [Integer to Roman](problems/int_to_roman/SOLUTION.md) | Greedy conversion |
| [Longest Consecutive Sequence](problems/longest_consecutive_sequence/SOLUTION.md) | Hash set |
| [Minimum Distance to the Target Element](problems/minimum_distance/SOLUTION.md) | Linear scan |
| [Search Insert Position](problems/search_insert_position/SOLUTION.md) | Binary search |
| [Two Crystal Balls](problems/two_crystal_balls/SOLUTION.md) | Square-root jump search |
| [Two Sum](problems/two_sum/SOLUTION.md) | Hash map |
| [Valid Anagram](problems/valid_anagram/SOLUTION.md) | Frequency counting / hash map |
| [Valid Parentheses](problems/valid_parenthesis/SOLUTION.md) | Stack |

## Repository structure

```text
concepts/
  algorithms/
    implementation/<topic>/{golang,python,typescript}/
    theory/<topic>/
  data_structures/
    implementation/<structure>/{golang,python,typescript}/
    theory/<structure>/
problems/<problem>/
  QUESTION.md
  golang/
  python/
  typescript/
scripts/
  test_python.py
Taskfile.yml
go.mod
package.json
```

Code stays next to its topic and language. Go implementations use `solution.go`,
Python implementations use `solution.py`, and TypeScript implementations use
`index.ts`. Binary tree nodes and traversals have descriptive file names.
Illustrated theory notes and problem statements stay separate from executable code.

Tests live alongside the implementation they exercise, inside each language's
directory: `solution_test.go` for Go, `test_solution.py` for Python, and
`index.test.ts` for TypeScript. Tree traversals follow their source file names.
Go uses one root module. Python's small runner discovers test modules recursively
without requiring package marker files throughout the repository.
Tests assert results and report failures with a nonzero exit code; importing an
implementation does not execute demonstrations.

## Requirements

- [Task](https://taskfile.dev/docs/installation/) v3
- Go 1.26.3 or newer
- Python 3.10 or newer, available as `python`
- Node.js 24.12 or newer
- pnpm 11 or newer

The test suites use Go's `testing`, Python's `unittest`, and Node's `node:test`
with strict assertions. TypeScript runs using Node's native type stripping.
The TypeScript compiler is a development dependency managed by pnpm, so no global
TypeScript installation is required.

## Development

Run commands from the repository root:

```sh
pnpm install --frozen-lockfile
task
task test
task check
```

`task` lists commands. `task test` runs all three language suites sequentially.
`task check` also checks TypeScript implementation types and runs `go vet ./...`.
Run `task check:typescript` or `pnpm typecheck` to check types separately.
`tsconfig.json` covers implementations; tests run directly through Node.js.

Run a language suite or pass arguments to its test runner:

```sh
task test:go
task test:python
task test:typescript
task test:go -- -cover
task test:python -- -v
task test:typescript -- --test-name-pattern="two sum"
task fmt:go
```

To use a different Python executable, pass `PYTHON=python3`, for example
`task test:python PYTHON=python3`.

The same suites can run without Task:

```sh
go test ./...
python -m scripts.test_python
pnpm test
```

For a single Go topic, use its package path:

```sh
go test ./problems/two_sum/golang -v
python -m unittest problems.two_sum.python.test_solution -v
node --test problems/two_sum/typescript/index.test.ts
```

Implementations are study libraries. Import them from a REPL or a separate script
to experiment, and put reproducible examples in the unit suites. Keep assertions
focused on behavior, including empty inputs, repeated values, boundaries, missing
paths, capacity limits and reuse after removal.
