import unittest

from concepts.data_structures.implementation.graphs.dfs_adj_list.python.solution import (
    dfs,
)


class SolutionTests(unittest.TestCase):
    def test_dfs_cycles_unreachable_and_same_vertex(self):
        graph = [[[1, 1]], [[0, 1], [2, 1]], [], []]
        self.assertEqual(dfs(graph, 0, 2), [0, 1, 2])
        self.assertIsNone(dfs(graph, 0, 3))
        self.assertEqual(dfs(graph, 0, 0), [0])
