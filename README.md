# Data Structures and Algorithms

A collection of data structures, algorithms, and coding exercises implemented in Go, TypeScript and Python. The repository is intended as a practical study resource: each implementation is small, self-contained, and includes examples that can be run from the command line.

## Contents

### Algorithm implementations

| Topic | Time complexity | Go | TypeScript | Python |
| --- | --- | --- | --- | --- |
| Linear search | `O(n)` | [Solution](concepts/algorithms/implementation/linear_search/golang/main.go) | [Solution](concepts/algorithms/implementation/linear_search/typescript/index.ts) | [Solution](concepts/algorithms/implementation/linear_search/python/main.py) |
| Binary search | `O(log n)` | [Solution](concepts/algorithms/implementation/binary_search/golang/main.go) | [Solution](concepts/algorithms/implementation/binary_search/typescript/index.ts) | [Solution](concepts/algorithms/implementation/binary_search/python/main.py) |
| Bubble sort | `O(n^2)` | [Solution](concepts/algorithms/implementation/bubble_sort/golang/main.go) | [Solution](concepts/algorithms/implementation/bubble_sort/typescript/index.ts) | [Solution](concepts/algorithms/implementation/bubble_sort/python/main.py) |
| Queue | `O(1)` enqueue, dequeue, and peek | [Solution](concepts/algorithms/implementation/queues/golang/main.go) | [Solution](concepts/algorithms/implementation/queues/typescript/index.ts) | [Solution](concepts/algorithms/implementation/queues/python/main.py) |

### Exercises

| Exercise | Main technique | Go | TypeScript | Python | Problem |
| --- | --- | --- | --- | --- | --- |
| Contains Duplicate | Hash set | [Solution](exercises/contains_duplicate/golang/main.go) | [Solution](exercises/contains_duplicate/typescript/index.ts) | [Solution](exercises/contains_duplicate/python/main.py) | [Description](exercises/contains_duplicate/QUESTION.md) |
| Minimum Distance to the Target Element | Linear scan | [Solution](exercises/minimum_distance/golang/main.go) | [Solution](exercises/minimum_distance/typescript/index.ts) | [Solution](exercises/minimum_distance/python/main.py) | [Description](exercises/minimum_distance/QUESTION.md) |
| Search Insert Position | Binary search | [Solution](exercises/search_insert_position/golang/main.go) | [Solution](exercises/search_insert_position/typescript/index.ts) | [Solution](exercises/search_insert_position/python/main.py) | [Description](exercises/search_insert_position/QUESTION.md) |
| Two Crystal Balls | Square-root jump search | [Solution](exercises/two_crystal_balls/golang/main.go) | [Solution](exercises/two_crystal_balls/typescript/index.ts) | [Solution](exercises/two_crystal_balls/python/main.py) | [Description](exercises/two_crystal_balls/QUESTION.md) |
| Valid Parentheses | Stack | [Solution](exercises/valid_parenthesis/golang/main.go) | [Solution](exercises/valid_parenthesis/typescript/index.ts) | [Solution](exercises/valid_parenthesis/python/main.py) | [Description](exercises/valid_parenthesis/QUESTION.md) |

## Repository structure

```text
.
|-- concepts/
|   `-- algorithms/
|       `-- implementation/    # Core algorithms and data structures
|           `-- <topic>/
|               |-- golang/
|               |-- typescript/
|               `-- python/
`-- exercises/
    `-- <exercise>/
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

Replace `<location>` with the directory containing the implementation, such as `exercises/contains_duplicate` or `concepts/algorithms/implementation/binary_search`.
