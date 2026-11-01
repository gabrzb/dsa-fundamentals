# Data Structures and Algorithms

A collection of data structures, algorithms, and coding problems implemented in Go, TypeScript and Python. The repository is intended as a practical study resource, combining illustrated theory notes with importable implementations and automated unit tests.

## Contents

### Algorithm implementations

| Topic | Time complexity | Theory | Go | TypeScript | Python |
| --- | --- | --- | --- | --- | --- |
| Linear search | `O(n)` | [Notes](concepts/algorithms/theory/linear_search/Linear%20Search.md) | [Solution](concepts/algorithms/implementation/linear_search/golang/solution.go) | [Solution](concepts/algorithms/implementation/linear_search/typescript/index.ts) | [Solution](concepts/algorithms/implementation/linear_search/python/solution.py) |
| Binary search | `O(log n)` | [Notes](concepts/algorithms/theory/binary_search/Binary%20Search.md) | [Solution](concepts/algorithms/implementation/binary_search/golang/solution.go) | [Solution](concepts/algorithms/implementation/binary_search/typescript/index.ts) | [Solution](concepts/algorithms/implementation/binary_search/python/solution.py) |
| Bubble sort | `O(n^2)` | [Notes](concepts/algorithms/theory/bubble_sort/Bubble%20Sort.md) | [Solution](concepts/algorithms/implementation/bubble_sort/golang/solution.go) | [Solution](concepts/algorithms/implementation/bubble_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/bubble_sort/python/solution.py) |
| Insertion sort | `O(n^2)` | — | [Solution](concepts/algorithms/implementation/insertion_sort/golang/solution.go) | [Solution](concepts/algorithms/implementation/insertion_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/insertion_sort/python/solution.py) |
| Selection sort | `O(n^2)` | — | [Solution](concepts/algorithms/implementation/selection_sort/golang/solution.go) | [Solution](concepts/algorithms/implementation/selection_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/selection_sort/python/solution.py) |
| Merge sort | `O(n log n)` | — | [Solution](concepts/algorithms/implementation/merge_sort/golang/solution.go) | [Solution](concepts/algorithms/implementation/merge_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/merge_sort/python/solution.py) |
| Quick sort | Average `O(n log n)`; worst-case `O(n^2)` | — | [Solution](concepts/algorithms/implementation/quick_sort/golang/solution.go) | [Solution](concepts/algorithms/implementation/quick_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/quick_sort/python/solution.py) |
| Heap sort | `O(n log n)` | — | [Solution](concepts/algorithms/implementation/heap_sort/golang/solution.go) | [Solution](concepts/algorithms/implementation/heap_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/heap_sort/python/solution.py) |
| Radix sort (nonnegative integers) | `O(d(n + b))` for `d` digits and base `b` | — | [Solution](concepts/algorithms/implementation/radix_sort/golang/solution.go) | [Solution](concepts/algorithms/implementation/radix_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/radix_sort/python/solution.py) |
| Recursive maze solver | `O(r * c)` for `r` rows and `c` columns | — | [Solution](concepts/algorithms/implementation/recursion/golang/solution.go) | [Solution](concepts/algorithms/implementation/recursion/typescript/index.ts) | [Solution](concepts/algorithms/implementation/recursion/python/solution.py) |

### Data structure implementations

| Data structure | Typical operation complexity | Theory | Go | TypeScript | Python |
| --- | --- | --- | --- | --- | --- |
| Static array | `O(1)` access; `O(n)` insertion and deletion | [Notes](concepts/data_structures/theory/arrays/static_arrays/Static%20Array.md) | [Solution](concepts/data_structures/implementation/arrays/static_array/golang/solution.go) | [Solution](concepts/data_structures/implementation/arrays/static_array/typescript/index.ts) | [Solution](concepts/data_structures/implementation/arrays/static_array/python/solution.py) |
| Dynamic array | `O(1)` access; amortized `O(1)` append | [Notes](concepts/data_structures/theory/arrays/dynamic_arrays/Dynamic%20Array.md) | [Solution](concepts/data_structures/implementation/arrays/dynamic_array/golang/solution.go) | [Solution](concepts/data_structures/implementation/arrays/dynamic_array/typescript/index.ts) | [Solution](concepts/data_structures/implementation/arrays/dynamic_array/python/solution.py) |
| Hash map | Average `O(1)` insertion, lookup, and deletion; worst-case `O(n)` | — | [Solution](concepts/data_structures/implementation/hashmaps/golang/solution.go) | [Solution](concepts/data_structures/implementation/hashmaps/typescript/index.ts) | [Solution](concepts/data_structures/implementation/hashmaps/python/solution.py) |
| Min heap | `O(log n)` insertion and deletion | — | [Solution](concepts/data_structures/implementation/heap/golang/solution.go) | [Solution](concepts/data_structures/implementation/heap/typescript/index.ts) | [Solution](concepts/data_structures/implementation/heap/python/solution.py) |
| LRU cache | `O(1)` lookup and update | — | [Solution](concepts/data_structures/implementation/lru_cache/golang/solution.go) | [Solution](concepts/data_structures/implementation/lru_cache/typescript/index.ts) | [Solution](concepts/data_structures/implementation/lru_cache/python/solution.py) |
| Singly linked list | `O(1)` insertion at head; `O(n)` access | — | [Solution](concepts/data_structures/implementation/linked_list/singly/golang/solution.go) | [Solution](concepts/data_structures/implementation/linked_list/singly/typescript/index.ts) | [Solution](concepts/data_structures/implementation/linked_list/singly/python/solution.py) |
| Doubly linked list | `O(1)` insertion at head or tail; `O(n)` access | — | [Solution](concepts/data_structures/implementation/linked_list/doubly/golang/solution.go) | [Solution](concepts/data_structures/implementation/linked_list/doubly/typescript/index.ts) | [Solution](concepts/data_structures/implementation/linked_list/doubly/python/solution.py) |
| Queue | `O(1)` enqueue, dequeue, and peek | [Notes](concepts/data_structures/theory/queue/Queue.md) | [Solution](concepts/data_structures/implementation/queues/golang/solution.go) | [Solution](concepts/data_structures/implementation/queues/typescript/index.ts) | [Solution](concepts/data_structures/implementation/queues/python/solution.py) |
| Stack | `O(1)` push, pop, and peek | [Notes](concepts/data_structures/theory/stack/Stack.md) | [Solution](concepts/data_structures/implementation/stack/golang/solution.go) | [Solution](concepts/data_structures/implementation/stack/typescript/index.ts) | [Solution](concepts/data_structures/implementation/stack/python/solution.py) |
| Graph breadth-first search (adjacency matrix) | `O(V^2)` time; `O(V)` auxiliary space | — | [Solution](concepts/data_structures/implementation/graphs/bfs_adj_matrix/golang/solution.go) | [Solution](concepts/data_structures/implementation/graphs/bfs_adj_matrix/typescript/index.ts) | [Solution](concepts/data_structures/implementation/graphs/bfs_adj_matrix/python/solution.py) |
| Graph depth-first search (adjacency list) | `O(V + E)` time; `O(V)` auxiliary space | — | [Solution](concepts/data_structures/implementation/graphs/dfs_adj_list/golang/solution.go) | [Solution](concepts/data_structures/implementation/graphs/dfs_adj_list/typescript/index.ts) | [Solution](concepts/data_structures/implementation/graphs/dfs_adj_list/python/solution.py) |
| Dijkstra shortest path (adjacency list) | `O(V^2 + E)` time; `O(V)` auxiliary space | — | [Solution](concepts/data_structures/implementation/graphs/dijkstra_path/golang/solution.go) | [Solution](concepts/data_structures/implementation/graphs/dijkstra_path/typescript/index.ts) | [Solution](concepts/data_structures/implementation/graphs/dijkstra_path/python/solution.py) |
| Binary tree base | `O(1)` node creation and access | — | [Solution](concepts/data_structures/implementation/tree/bt_base/golang/binary_tree.go) | [Solution](concepts/data_structures/implementation/tree/bt_base/typescript/binary_tree.ts) | [Solution](concepts/data_structures/implementation/tree/bt_base/python/binary_tree.py) |
| Binary tree comparison | `O(n)` time; `O(h)` recursion space | — | [Solution](concepts/data_structures/implementation/tree/bt_comparison/golang/solution.go) | [Solution](concepts/data_structures/implementation/tree/bt_comparison/typescript/index.ts) | [Solution](concepts/data_structures/implementation/tree/bt_comparison/python/solution.py) |
| Binary tree depth-first search | `O(n)` time; `O(h)` recursion space | — | [Solution](concepts/data_structures/implementation/tree/bt_dfs/golang/solution.go) | [Solution](concepts/data_structures/implementation/tree/bt_dfs/typescript/index.ts) | [Solution](concepts/data_structures/implementation/tree/bt_dfs/python/solution.py) |
| Binary tree breadth-first search | `O(n)` time; `O(w)` queue space | — | [Solution](concepts/data_structures/implementation/tree/bt_traversal/breadth_first/golang/solution.go) | [Solution](concepts/data_structures/implementation/tree/bt_traversal/breadth_first/typescript/bt_bfs.ts) | [Solution](concepts/data_structures/implementation/tree/bt_traversal/breadth_first/python/solution.py) |
| Binary tree depth-first traversal | `O(n)` time; `O(h)` recursion space | — | [In-order](concepts/data_structures/implementation/tree/bt_traversal/depth_first/golang/bt_in_order.go), [post-order](concepts/data_structures/implementation/tree/bt_traversal/depth_first/golang/bt_post_order.go), [pre-order](concepts/data_structures/implementation/tree/bt_traversal/depth_first/golang/bt_pre_order.go) | [In-order](concepts/data_structures/implementation/tree/bt_traversal/depth_first/typescript/bt_in_order.ts), [post-order](concepts/data_structures/implementation/tree/bt_traversal/depth_first/typescript/bt_post_order.ts), [pre-order](concepts/data_structures/implementation/tree/bt_traversal/depth_first/typescript/bt_pre_order.ts) | [In-order](concepts/data_structures/implementation/tree/bt_traversal/depth_first/python/bt_in_order.py), [post-order](concepts/data_structures/implementation/tree/bt_traversal/depth_first/python/bt_post_order.py), [pre-order](concepts/data_structures/implementation/tree/bt_traversal/depth_first/python/bt_pre_order.py) |

### Problems

| Problem | Main technique | Description | Go | TypeScript | Python |
| --- | --- | --- | --- | --- | --- |
| Contains Duplicate | Hash set | [Description](problems/contains_duplicate/QUESTION.md) | [Solution](problems/contains_duplicate/golang/solution.go) | [Solution](problems/contains_duplicate/typescript/index.ts) | [Solution](problems/contains_duplicate/python/solution.py) |
| Group Anagrams | Frequency counting / hash map | [Description](problems/group_anagrams/QUESTION.md) | [Solution](problems/group_anagrams/golang/solution.go) | [Solution](problems/group_anagrams/typescript/index.ts) | [Solution](problems/group_anagrams/python/solution.py) |
| Integer to Roman | Greedy conversion | [Description](problems/int_to_roman/QUESTION.md) | [Solution](problems/int_to_roman/golang/solution.go) | [Solution](problems/int_to_roman/typescript/index.ts) | [Solution](problems/int_to_roman/python/solution.py) |
| Longest Consecutive Sequence | Hash set | [Description](problems/longest_consecutive_sequence/QUESTION.md) | [Solution](problems/longest_consecutive_sequence/golang/solution.go) | [Solution](problems/longest_consecutive_sequence/typescript/index.ts) | [Solution](problems/longest_consecutive_sequence/python/solution.py) |
| Minimum Distance to the Target Element | Linear scan | [Description](problems/minimum_distance/QUESTION.md) | [Solution](problems/minimum_distance/golang/solution.go) | [Solution](problems/minimum_distance/typescript/index.ts) | [Solution](problems/minimum_distance/python/solution.py) |
| Search Insert Position | Binary search | [Description](problems/search_insert_position/QUESTION.md) | [Solution](problems/search_insert_position/golang/solution.go) | [Solution](problems/search_insert_position/typescript/index.ts) | [Solution](problems/search_insert_position/python/solution.py) |
| Two Crystal Balls | Square-root jump search | [Description](problems/two_crystal_balls/QUESTION.md) | [Solution](problems/two_crystal_balls/golang/solution.go) | [Solution](problems/two_crystal_balls/typescript/index.ts) | [Solution](problems/two_crystal_balls/python/solution.py) |
| Two Sum | Hash map | [Description](problems/two_sum/QUESTION.md) | [Solution](problems/two_sum/golang/solution.go) | [Solution](problems/two_sum/typescript/index.ts) | [Solution](problems/two_sum/python/solution.py) |
| Valid Anagram | Frequency counting / hash map | [Description](problems/valid_anagram/QUESTION.md) | [Solution 1](problems/valid_anagram/solution_1/golang/solution.go), [Solution 2](problems/valid_anagram/solution_2/golang/solution.go) | [Solution 1](problems/valid_anagram/solution_1/typescript/index.ts), [Solution 2](problems/valid_anagram/solution_2/typescript/index.ts) | [Solution 1](problems/valid_anagram/solution_1/python/solution.py), [Solution 2](problems/valid_anagram/solution_2/python/solution.py) |
| Valid Parentheses | Stack | [Description](problems/valid_parenthesis/QUESTION.md) | [Solution](problems/valid_parenthesis/golang/solution.go) | [Solution](problems/valid_parenthesis/typescript/index.ts) | [Solution](problems/valid_parenthesis/python/solution.py) |

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
tests/
  python/
  typescript/
Taskfile.yml
go.mod
package.json
```

Code stays next to its topic and language. Go implementations use `solution.go`,
Python implementations use `solution.py`, and TypeScript implementations use
`index.ts`. Binary tree nodes and traversals have descriptive file names.
Illustrated theory notes and problem statements stay separate from executable code.

Go uses one root module, with `solution_test.go` files alongside implementations.
Python and TypeScript suites live under `tests/`, grouped by algorithms, problems,
data structures, and graphs/trees. Tests assert results and report failures with a
nonzero exit code; importing an implementation does not execute demonstrations.

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
python -m unittest discover -s tests/python
node --test tests/typescript/*.test.ts
```

For a single Go topic, use its package path:

```sh
go test ./problems/two_sum/golang -v
```

Implementations are study libraries. Import them from a REPL or a separate script
to experiment, and put reproducible examples in the unit suites. Keep assertions
focused on behavior, including empty inputs, repeated values, boundaries, missing
paths, capacity limits and reuse after removal.

Radix sort accepts nonnegative integers and rejects negative inputs. Graph
algorithms expect valid vertex indices; Dijkstra expects nonnegative edge weights.
Anagram exercises follow the lowercase English alphabet constraints in their
problem statement. Binary tree DFS uses binary search tree ordering.
