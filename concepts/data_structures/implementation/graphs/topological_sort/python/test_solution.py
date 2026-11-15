import copy
import itertools
import unittest

from concepts.data_structures.implementation.graphs.topological_sort.python.solution import topological_sort


class SolutionTests(unittest.TestCase):
    def test_every_three_vertex_graph_against_all_permutations(self):
        for mask in range(1 << 9):
            graph = [[v for v in range(3) if mask & (1 << (u * 3 + v))] for u in range(3)]
            possible = False
            for order in itertools.permutations(range(3)):
                rank = {v: i for i, v in enumerate(order)}
                possible |= all(rank[u] < rank[v] for u in range(3) for v in graph[u])
            original = copy.deepcopy(graph)
            result = topological_sort(graph)
            if not possible:
                self.assertIsNone(result)
            else:
                self.assertEqual(sorted(result), list(range(3)))
                rank = {v: i for i, v in enumerate(result)}
                self.assertTrue(all(rank[u] < rank[v] for u in range(3) for v in graph[u]))
            self.assertEqual(graph, original)

    def test_fifo_order_duplicate_edges_and_cycle_after_partial_output(self):
        self.assertEqual(topological_sort([[1, 2], [3], [3], [4], [], []]), [0, 5, 1, 2, 3, 4])
        self.assertEqual(topological_sort([[1, 1], []]), [0, 1])
        self.assertIsNone(topological_sort([[1, 2], [3], [3], [4], [1], []]))
        self.assertEqual(topological_sort([]), [])
        self.assertEqual(topological_sort([[], [], []]), [0, 1, 2])
        with self.assertRaises(ValueError):
            topological_sort([[1]])
