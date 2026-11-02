import unittest

from concepts.data_structures.implementation.graphs.bfs_adj_matrix.python.solution import (
    bfs,
)


class SolutionTests(unittest.TestCase):
    def test_bfs_paths(self):
        graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]
        self.assertEqual(bfs(graph, 0, 2), [0, 1, 2])
        self.assertIsNone(bfs(graph, 0, 3))
        self.assertEqual(bfs(graph, 0, 0), [0])
