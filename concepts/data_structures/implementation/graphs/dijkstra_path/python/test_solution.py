import unittest

from concepts.data_structures.implementation.graphs.dijkstra_path.python.solution import (
    dijkstra_list,
)


class SolutionTests(unittest.TestCase):
    def test_dijkstra_chooses_lowest_weight(self):
        graph = [[[1, 4], [2, 1]], [[3, 1]], [[1, 2], [3, 5]], [], []]
        self.assertEqual(dijkstra_list(0, 3, graph), [0, 2, 1, 3])
        self.assertIsNone(dijkstra_list(0, 4, graph))
        self.assertEqual(dijkstra_list(2, 2, graph), [2])
