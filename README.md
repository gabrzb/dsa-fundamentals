# Data Structures and Algorithms

A collection of data structures, algorithms, and coding problems implemented in Go, TypeScript and Python. The repository is intended as a practical study resource, combining illustrated theory notes with small, self-contained implementations and examples that can be run from the command line.

## Contents

### Algorithm implementations

| Topic | Time complexity | Theory | Go | TypeScript | Python |
| --- | --- | --- | --- | --- | --- |
| Linear search | `O(n)` | [Notes](concepts/algorithms/theory/linear_search/Linear%20Search.md) | [Solution](concepts/algorithms/implementation/linear_search/golang/main.go) | [Solution](concepts/algorithms/implementation/linear_search/typescript/index.ts) | [Solution](concepts/algorithms/implementation/linear_search/python/main.py) |
| Binary search | `O(log n)` | [Notes](concepts/algorithms/theory/binary_search/Binary%20Search.md) | [Solution](concepts/algorithms/implementation/binary_search/golang/main.go) | [Solution](concepts/algorithms/implementation/binary_search/typescript/index.ts) | [Solution](concepts/algorithms/implementation/binary_search/python/main.py) |
| Bubble sort | `O(n^2)` | — | [Solution](concepts/algorithms/implementation/bubble_sort/golang/main.go) | [Solution](concepts/algorithms/implementation/bubble_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/bubble_sort/python/main.py) |

### Data structure implementations

| Data structure | Typical operation complexity | Go | TypeScript | Python |
| --- | --- | --- | --- | --- |
| Static array | `O(1)` access; `O(n)` insertion and deletion | [Solution](concepts/data%20structures/implementation/arrays/static_array/golang/main.go) | [Solution](concepts/data%20structures/implementation/arrays/static_array/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/arrays/static_array/python/main.py) |
| Dynamic array | `O(1)` access; amortized `O(1)` append | [Solution](concepts/data%20structures/implementation/arrays/dynamic_array/golang/main.go) | [Solution](concepts/data%20structures/implementation/arrays/dynamic_array/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/arrays/dynamic_array/python/main.py) |
| Singly linked list | `O(1)` insertion at head; `O(n)` access | [Solution](concepts/data%20structures/implementation/linked_list/singly/golang/main.go) | [Solution](concepts/data%20structures/implementation/linked_list/singly/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/linked_list/singly/python/main.py) |
| Doubly linked list | `O(1)` insertion at head or tail; `O(n)` access | [Solution](concepts/data%20structures/implementation/linked_list/doubly/golang/main.go) | [Solution](concepts/data%20structures/implementation/linked_list/doubly/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/linked_list/doubly/python/main.py) |
| Queue | `O(1)` enqueue, dequeue, and peek | [Solution](concepts/data%20structures/implementation/queues/golang/main.go) | [Solution](concepts/data%20structures/implementation/queues/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/queues/python/main.py) |
| Stack | `O(1)` push, pop, and peek | [Solution](concepts/data%20structures/implementation/stack/golang/main.go) | [Solution](concepts/data%20structures/implementation/stack/typescript/index.ts) | [Solution](concepts/data%20structures/implementation/stack/python/main.py) |

### Problems

| Problem | Main technique | Description | Go | TypeScript | Python |
| --- | --- | --- | --- | --- | --- |
| Contains Duplicate | Hash set | [Description](problems/contains_duplicate/QUESTION.md) | [Solution](problems/contains_duplicate/golang/main.go) | [Solution](problems/contains_duplicate/typescript/index.ts) | [Solution](problems/contains_duplicate/python/main.py) |
| Minimum Distance to the Target Element | Linear scan | [Description](problems/minimum_distance/QUESTION.md) | [Solution](problems/minimum_distance/golang/main.go) | [Solution](problems/minimum_distance/typescript/index.ts) | [Solution](problems/minimum_distance/python/main.py) |
| Search Insert Position | Binary search | [Description](problems/search_insert_position/QUESTION.md) | [Solution](problems/search_insert_position/golang/main.go) | [Solution](problems/search_insert_position/typescript/index.ts) | [Solution](problems/search_insert_position/python/main.py) |
| Two Crystal Balls | Square-root jump search | [Description](problems/two_crystal_balls/QUESTION.md) | [Solution](problems/two_crystal_balls/golang/main.go) | [Solution](problems/two_crystal_balls/typescript/index.ts) | [Solution](problems/two_crystal_balls/python/main.py) |
| Valid Parentheses | Stack | [Description](problems/valid_parenthesis/QUESTION.md) | [Solution](problems/valid_parenthesis/golang/main.go) | [Solution](problems/valid_parenthesis/typescript/index.ts) | [Solution](problems/valid_parenthesis/python/main.py) |

## Repository structure

```text
.
|-- concepts/
|   |-- algorithms/
|       |-- theory/            # Illustrated explanations and walkthroughs
|       |   `-- <topic>/
|       |       |-- Images/
|       |       `-- <topic>.md
|       `-- implementation/    # Core algorithms
|           `-- <topic>/
|               |-- golang/
|               |-- typescript/
|               `-- python/
|   `-- data structures/
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

Replace `<location>` with the directory containing the implementation, such as `problems/contains_duplicate` or `concepts/algorithms/implementation/binary_search`.
