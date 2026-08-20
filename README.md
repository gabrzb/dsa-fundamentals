# Data Structures and Algorithms

A collection of data structures, algorithms, and coding problems implemented in Go, TypeScript and Python. The repository is intended as a practical study resource, combining illustrated theory notes with small, self-contained implementations and examples that can be run from the command line.

## Contents

### Algorithm implementations

| Topic | Time complexity | Theory | Go | TypeScript | Python |
| --- | --- | --- | --- | --- | --- |
| Linear search | `O(n)` | [Notes](concepts/algorithms/theory/linear_search/Linear%20Search.md) | [Solution](concepts/algorithms/implementation/linear_search/golang/main.go) | [Solution](concepts/algorithms/implementation/linear_search/typescript/index.ts) | [Solution](concepts/algorithms/implementation/linear_search/python/main.py) |
| Binary search | `O(log n)` | [Notes](concepts/algorithms/theory/binary_search/Binary%20Search.md) | [Solution](concepts/algorithms/implementation/binary_search/golang/main.go) | [Solution](concepts/algorithms/implementation/binary_search/typescript/index.ts) | [Solution](concepts/algorithms/implementation/binary_search/python/main.py) |
| Bubble sort | `O(n^2)` | [Notes](concepts/algorithms/theory/bubble_sort/Bubble%20Sort.md) | [Solution](concepts/algorithms/implementation/bubble_sort/golang/main.go) | [Solution](concepts/algorithms/implementation/bubble_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/bubble_sort/python/main.py) |
| Insertion sort | `O(n^2)` | — | [Solution](concepts/algorithms/implementation/insertion_sort/golang/main.go) | [Solution](concepts/algorithms/implementation/insertion_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/insertion_sort/python/main.py) |
| Selection sort | `O(n^2)` | — | [Solution](concepts/algorithms/implementation/selection_sort/golang/main.go) | [Solution](concepts/algorithms/implementation/selection_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/selection_sort/python/main.py) |
| Merge sort | `O(n log n)` | — | [Solution](concepts/algorithms/implementation/merge_sort/golang/main.go) | [Solution](concepts/algorithms/implementation/merge_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/merge_sort/python/main.py) |
| Quick sort | Average `O(n log n)`; worst-case `O(n^2)` | — | [Solution](concepts/algorithms/implementation/quick_sort/golang/main.go) | [Solution](concepts/algorithms/implementation/quick_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/quick_sort/python/main.py) |
| Heap sort | `O(n log n)` | — | [Solution](concepts/algorithms/implementation/heap_sort/golang/main.go) | [Solution](concepts/algorithms/implementation/heap_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/heap_sort/python/main.py) |
| Radix sort (nonnegative integers) | `O(d(n + b))` for `d` digits and base `b` | — | [Solution](concepts/algorithms/implementation/radix_sort/golang/main.go) | [Solution](concepts/algorithms/implementation/radix_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/radix_sort/python/main.py) |
| Recursive maze solver | `O(r * c)` for `r` rows and `c` columns | — | [Solution](concepts/algorithms/implementation/recursion/typescript/index.ts) | [Solution](concepts/algorithms/implementation/recursion/python/main.py) |

### Data structure implementations

| Data structure | Typical operation complexity | Theory | Go | TypeScript | Python |
| --- | --- | --- | --- | --- | --- |
| Static array | `O(1)` access; `O(n)` insertion and deletion | [Notes](concepts/data%20structures/theory/arrays/static_arrays/Static%20Array.md) | [Solution](concepts/data%20structures/implementation/arrays/static_array/golang/main.go) | [Solution](concepts/data%20structures/implementation/arrays/static_array/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/arrays/static_array/python/main.py) |
| Dynamic array | `O(1)` access; amortized `O(1)` append | [Notes](concepts/data%20structures/theory/arrays/dinamic_arrays/Dynamic%20Array.md) | [Solution](concepts/data%20structures/implementation/arrays/dynamic_array/golang/main.go) | [Solution](concepts/data%20structures/implementation/arrays/dynamic_array/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/arrays/dynamic_array/python/main.py) |
| Hash map | Average `O(1)` insertion, lookup, and deletion; worst-case `O(n)` | — | [Solution](concepts/data%20structures/implementation/hashmaps/golang/main.go) | [Solution](concepts/data%20structures/implementation/hashmaps/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/hashmaps/python/main.py) |
| Min heap | `O(log n)` insertion and deletion | — | [Solution](concepts/data%20structures/implementation/heap/golang/main.go) | [Solution](concepts/data%20structures/implementation/heap/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/heap/python/main.py) |
| LRU cache | `O(1)` lookup and update | — | [Solution](concepts/data%20structures/implementation/lru_cache/golang/main.go) | [Solution](concepts/data%20structures/implementation/lru_cache/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/lru_cache/python/main.py) |
| Singly linked list | `O(1)` insertion at head; `O(n)` access | — | [Solution](concepts/data%20structures/implementation/linked_list/singly/golang/main.go) | [Solution](concepts/data%20structures/implementation/linked_list/singly/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/linked_list/singly/python/main.py) |
| Doubly linked list | `O(1)` insertion at head or tail; `O(n)` access | — | [Solution](concepts/data%20structures/implementation/linked_list/doubly/golang/main.go) | [Solution](concepts/data%20structures/implementation/linked_list/doubly/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/linked_list/doubly/python/main.py) |
| Queue | `O(1)` enqueue, dequeue, and peek | [Notes](concepts/data%20structures/theory/queue/Queue.md) | [Solution](concepts/data%20structures/implementation/queues/golang/main.go) | [Solution](concepts/data%20structures/implementation/queues/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/queues/python/main.py) |
| Stack | `O(1)` push, pop, and peek | [Notes](concepts/data%20structures/theory/stack/Stack.md) | [Solution](concepts/data%20structures/implementation/stack/golang/main.go) | [Solution](concepts/data%20structures/implementation/stack/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/stack/python/main.py) |
| Graph breadth-first search (adjacency matrix) | `O(V^2)` time; `O(V)` auxiliary space | — | [Solution](concepts/data%20structures/implementation/graphs/bfs_adj_matrix/golang/main.go) | [Solution](concepts/data%20structures/implementation/graphs/bfs_adj_matrix/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/graphs/bfs_adj_matrix/python/main.py) |
| Graph depth-first search (adjacency list) | `O(V + E)` time; `O(V)` auxiliary space | — | [Solution](concepts/data%20structures/implementation/graphs/dfs_adj_list/golang/main.go) | [Solution](concepts/data%20structures/implementation/graphs/dfs_adj_list/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/graphs/dfs_adj_list/python/main.py) |
| Dijkstra shortest path (adjacency list) | `O(V^2 + E)` time; `O(V)` auxiliary space | — | [Solution](concepts/data%20structures/implementation/graphs/dijkstra_path/golang/main.go) | [Solution](concepts/data%20structures/implementation/graphs/dijkstra_path/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/graphs/dijkstra_path/python/main.py) |
| Binary tree base | `O(1)` node creation and access | — | [Solution](concepts/data%20structures/implementation/tree/bt_base/golang/binary_tree.go) | [Solution](concepts/data%20structures/implementation/tree/bt_base/typescript/binary_tree.ts) | [Solution](concepts/data%20structures/implementation/tree/bt_base/python/binary_tree.py) |
| Binary tree comparison | `O(n)` time; `O(h)` recursion space | — | [Solution](concepts/data%20structures/implementation/tree/bt_comparison/golang/main.go) | [Solution](concepts/data%20structures/implementation/tree/bt_comparison/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/tree/bt_comparison/python/main.py) |
| Binary tree depth-first search | `O(n)` time; `O(h)` recursion space | — | [Solution](concepts/data%20structures/implementation/tree/bt_dfs/golang/main.go) | [Solution](concepts/data%20structures/implementation/tree/bt_dfs/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/tree/bt_dfs/python/main.py) |
| Binary tree breadth-first search | `O(n)` time; `O(w)` queue space | — | [Solution](concepts/data%20structures/implementation/tree/bt_traversal/breadth_first/golang/main.go) | [Solution](concepts/data%20structures/implementation/tree/bt_traversal/breadth_first/typescript/bt_bfs.ts) | [Solution](concepts/data%20structures/implementation/tree/bt_traversal/breadth_first/python/main.py) |
| Binary tree depth-first traversal | `O(n)` time; `O(h)` recursion space | — | [In-order](concepts/data%20structures/implementation/tree/bt_traversal/depth_first/golang/bt_in_order.go), [post-order](concepts/data%20structures/implementation/tree/bt_traversal/depth_first/golang/bt_post_order.go), [pre-order](concepts/data%20structures/implementation/tree/bt_traversal/depth_first/golang/bt_pre_order.go) | [In-order](concepts/data%20structures/implementation/tree/bt_traversal/depth_first/typescript/bt_in_order.ts), [post-order](concepts/data%20structures/implementation/tree/bt_traversal/depth_first/typescript/bt_post_order.ts), [pre-order](concepts/data%20structures/implementation/tree/bt_traversal/depth_first/typescript/bt_pre_order.ts) | [In-order](concepts/data%20structures/implementation/tree/bt_traversal/depth_first/python/bt_in_order.py), [post-order](concepts/data%20structures/implementation/tree/bt_traversal/depth_first/python/bt_post_order.py), [pre-order](concepts/data%20structures/implementation/tree/bt_traversal/depth_first/python/bt_pre_order.py) |

### Problems

| Problem | Main technique | Description | Go | TypeScript | Python |
| --- | --- | --- | --- | --- | --- |
| Contains Duplicate | Hash set | [Description](problems/contains_duplicate/QUESTION.md) | [Solution](problems/contains_duplicate/golang/main.go) | [Solution](problems/contains_duplicate/typescript/index.ts) | [Solution](problems/contains_duplicate/python/main.py) |
| Minimum Distance to the Target Element | Linear scan | [Description](problems/minimum_distance/QUESTION.md) | [Solution](problems/minimum_distance/golang/main.go) | [Solution](problems/minimum_distance/typescript/index.ts) | [Solution](problems/minimum_distance/python/main.py) |
| Search Insert Position | Binary search | [Description](problems/search_insert_position/QUESTION.md) | [Solution](problems/search_insert_position/golang/main.go) | [Solution](problems/search_insert_position/typescript/index.ts) | [Solution](problems/search_insert_position/python/main.py) |
| Two Crystal Balls | Square-root jump search | [Description](problems/two_crystal_balls/QUESTION.md) | [Solution](problems/two_crystal_balls/golang/main.go) | [Solution](problems/two_crystal_balls/typescript/index.ts) | [Solution](problems/two_crystal_balls/python/main.py) |
| Two Sum | Hash map | [Description](problems/two_sum/QUESTION.md) | [Solution](problems/two_sum/golang/main.go) | [Solution](problems/two_sum/typescript/index.ts) | [Solution](problems/two_sum/python/main.py) |
| Valid Anagram | Frequency counting / hash map | [Description](problems/valid_anagram/QUESTION.md) | [Solution 1](problems/valid_anagram/solution_1/golang/main.go), [Solution 2](problems/valid_anagram/solution_2/golang/main.go) | [Solution 1](problems/valid_anagram/solution_1/typescript/index.ts), [Solution 2](problems/valid_anagram/solution_2/typescript/index.ts) | [Solution 1](problems/valid_anagram/solution_1/python/main.py), [Solution 2](problems/valid_anagram/solution_2/python/main.py) |
| Valid Parentheses | Stack | [Description](problems/valid_parenthesis/QUESTION.md) | [Solution](problems/valid_parenthesis/golang/main.go) | [Solution](problems/valid_parenthesis/typescript/index.ts) | [Solution](problems/valid_parenthesis/python/main.py) |

## Repository structure

```text
.
|-- concepts/
|   |-- algorithms/
|       |-- theory/            # Illustrated explanations and walkthroughs
|       |   `-- <topic>/
|       |       |-- images/
|       |       `-- <topic>.md
|       `-- implementation/    # Core algorithms
|           `-- <topic>/
|               |-- golang/
|               |-- typescript/
|               `-- python/
|   `-- data structures/
|       |-- theory/            # Illustrated explanations and walkthroughs
|       |   `-- <category>/
|       |       `-- <topic>/
|       |           |-- images/
|       |           `-- <topic>.md
|       `-- implementation/    # Core data structures
|           `-- <structure>/
|               |-- golang/
|               |-- typescript/
|               `-- python/
`-- problems/
    `-- <problem>/
        |-- QUESTION.md         # Problem statement
        |-- golang/
        |-- typescript/
        `-- python/
```

## Running an implementation

In the following examples, replace `<location>` with the directory containing the implementation, such as `problems/contains_duplicate` or `concepts/algorithms/implementation/binary_search`.

### Go

Each Go solution has its own module. Enter its directory and run it:

```bash
cd <location>/golang
go run .
```

### TypeScript

With [Node.js](https://nodejs.org/) installed, use a TypeScript runner such as [`tsx`](https://tsx.is/):

```bash
cd <location>/typescript
npx tsx index.ts
```

### Python

Run a Python solution directly with Python 3:

```bash
cd <location>/python
python main.py
```


### Running the binary tree implementations

The binary tree operations reuse the language-specific node implementation in `bt_base`.

Go modules can be run from their implementation directories:

```bash
cd "concepts/data structures/implementation/tree/bt_comparison/golang"
go run .
```

For TypeScript, run the operation's source file:

```bash
cd "concepts/data structures/implementation/tree/bt_traversal/depth_first/typescript"
npx tsx bt_in_order.ts
```

Run Python tree operations as modules from the `tree` directory so Python can resolve `bt_base`:

```bash
cd "concepts/data structures/implementation/tree"
python -m bt_comparison.python.main
python -m bt_traversal.breadth_first.python.main
python -m bt_traversal.depth_first.python.bt_in_order
python -m bt_traversal.depth_first.python.bt_post_order
python -m bt_traversal.depth_first.python.bt_pre_order
```
