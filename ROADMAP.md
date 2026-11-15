# DSA Study Roadmap

The roadmap extends the repository's existing Go, Python and TypeScript study material. Implement and test each topic before writing its English explanation. Keep one commit per concept or problem, including any referenced new images and index entries.

| Stage | Topics | Status |
| --- | --- | --- |
| 1. Algorithm analysis | Big O, Ω, Θ, amortized analysis, recurrences and call-stack space; review existing implementations and problem approaches | Complete: see the algorithm-analysis notes in the [index](README.md#algorithm-analysis) and the complexity derivations in each problem's `SOLUTION.md` |
| 2. Search trees | BST insertion and removal, then AVL or red-black maintenance | Planned |
| 3. Dynamic programming | Memoization and tabulation; climbing stairs, coin change, knapsack and LCS | Planned |
| 4. Graphs | Adjacency-list BFS, connected components, cycle detection, topological sorting, heap-based Dijkstra; then Union-Find, Kruskal and Prim | Planned |
| 5. Problem-solving techniques | Variable sliding window, fast/slow pointers, monotonic stack and queue, intervals, binary search on the answer | Planned |
| 6. Additional structures | Deque, trie and Union-Find; Fenwick and segment trees in a later phase | Planned |
| 7. Strings, bits and mathematics | KMP pattern matching, bitwise operations, GCD and prime sieve | Planned |

Union-Find appears in both the graph and structure stages; its implementation can serve both. Stages 2 through 7 are recorded for future work. The current delivery covers stage 1.

Stage 1 verification used the complete Go, Python and TypeScript suites, TypeScript type checking and `go vet`. Small execution checks also confirmed comparison counts, dynamic-array growth, merge-sort call sizes, quick-sort partitions, tree traversal depth and crystal-ball read indices. Asymptotic claims follow operation counting and proofs, rather than timing measurements.
