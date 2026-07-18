# Data Structures and Algorithms

A collection of data structures, algorithms, and coding exercises implemented in Go and TypeScript. The repository is intended as a practical study resource: each implementation is small, self-contained, and includes examples that can be run from the command line.

## Contents

### Fundamentals

| Topic | Time complexity | Go | TypeScript |
| --- | --- | --- | --- |
| Linear search | `O(n)` | [Solution](exercises/fundamentals/linear_search/golang/main.go) | [Solution](exercises/fundamentals/linear_search/typescript/index.ts) |
| Binary search | `O(log n)` | [Solution](exercises/fundamentals/binary_search/golang/main.go) | [Solution](exercises/fundamentals/binary_search/typescript/index.ts) |
| Bubble sort | `O(n²)` | [Solution](exercises/fundamentals/bubble_sort/golang/main.go) | [Solution](exercises/fundamentals/bubble_sort/typescript/index.ts) |
| Queue | `O(1)` enqueue, dequeue, and peek | [Solution](exercises/fundamentals/queues/golang/main.go) | [Solution](exercises/fundamentals/queues/typescript/index.ts) |

### Exercises

| Exercise | Main technique | Go | TypeScript | Problem |
| --- | --- | --- | --- | --- |
| Contains Duplicate | Hash set | [Solution](exercises/contains_duplicate/golang/main.go) | [Solution](exercises/contains_duplicate/typescript/index.ts) | [Description](exercises/contains_duplicate/QUESTION.md) |
| Minimum Distance to the Target Element | Linear scan | [Solution](exercises/minimum_distance/golang/main.go) | [Solution](exercises/minimum_distance/typescript/index.ts) | [Description](exercises/minimum_distance/QUESTION.md) |
| Search Insert Position | Binary search | [Solution](exercises/search_insert_position/golang/main.go) | [Solution](exercises/search_insert_position/typescript/index.ts) | [Description](exercises/search_insert_position/QUESTION.md) |
| Two Crystal Balls | Square-root jump search | [Solution](exercises/two_crystal_balls/golang/main.go) | [Solution](exercises/two_crystal_balls/typescript/index.ts) | [Description](exercises/two_crystal_balls/QUESTION.md) |
| Valid Parentheses | Stack | [Solution](exercises/valid_parenthesis/golang/main.go) | [Solution](exercises/valid_parenthesis/typescript/index.ts) | [Description](exercises/valid_parenthesis/QUESTION.md) |

## Repository structure

```text
.
├── concepts/                  # Notes and theory
└── exercises/
    ├── fundamentals/          # Core algorithms and data structures
    └── <exercise>/
        ├── QUESTION.md        # Problem statement, when available
        ├── golang/            # Go implementation and module
        └── typescript/        # TypeScript implementation
```

## Running an implementation

### Go

Each Go solution has its own module. Enter its directory and run it:

```bash
cd exercises/contains_duplicate/golang
go run .
```

### TypeScript

With [Node.js](https://nodejs.org/) installed, use a TypeScript runner such as [`tsx`](https://tsx.is/):

```bash
npx tsx exercises/contains_duplicate/typescript/index.ts
```

Replace `contains_duplicate` with the exercise you want to run. Fundamental examples are under `exercises/fundamentals/<topic>`.