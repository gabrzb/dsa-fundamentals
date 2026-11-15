import collections
import copy
import itertools
import unittest

from concepts.data_structures.implementation.graphs.kruskal.python.solution import kruskal


def reachability(size, edges):
    reach = [[u == v for v in range(size)] for u in range(size)]
    for u, v, _ in edges:
        reach[u][v] = reach[v][u] = True
    for k in range(size):
        for u in range(size):
            for v in range(size):
                reach[u][v] |= reach[u][k] and reach[k][v]
    return reach


class SolutionTests(unittest.TestCase):
    def check_forest(self, size, edges):
        expected_reach = reachability(size, edges)
        components = sum(not any(expected_reach[v][u] for u in range(v)) for v in range(size))
        required = size - components
        optimum = float("inf")
        for indices in itertools.combinations(range(len(edges)), required):
            chosen = [edges[i] for i in indices]
            if reachability(size, chosen) == expected_reach:
                optimum = min(optimum, sum(edge[2] for edge in chosen))
        original = copy.deepcopy(edges)
        forest = kruskal(size, edges)
        self.assertEqual(len(forest), required)
        self.assertEqual(reachability(size, forest), expected_reach)
        self.assertEqual(sum(edge[2] for edge in forest), optimum)
        normalize = lambda e: (min(e[0], e[1]), max(e[0], e[1]), e[2])
        available = collections.Counter(map(normalize, edges))
        for edge, count in collections.Counter(map(normalize, forest)).items():
            self.assertLessEqual(count, available[edge])
        self.assertEqual(edges, original)

    def test_every_four_vertex_simple_graph_against_all_spanning_forests(self):
        possible = [(u, v, i - 2) for i, (u, v) in enumerate(itertools.combinations(range(4), 2))]
        for mask in range(1 << len(possible)):
            self.check_forest(4, [edge for i, edge in enumerate(possible) if mask & (1 << i)])

    def test_empty_isolates_parallel_edges_loops_negative_weights_and_ties(self):
        for size, edges in [(0, []), (4, []), (5, [(0, 1, 4), (0, 1, -2), (1, 1, -100), (1, 2, 0)]), (4, [(0, 1, 1), (1, 2, 1), (2, 3, 1), (3, 0, 1), (0, 2, 1)])]:
            self.check_forest(size, edges)
        self.check_forest(4, [(0, 1, 4), (0, 2, 1), (2, 1, 2), (1, 3, 1), (2, 3, 5)])

    def test_invalid_inputs(self):
        for size, edges in [(-1, []), (0, [(0, 0, 1)]), (2, [(0, 2, 1)]), (2, [(-1, 1, 1)]), (2, [(0, 1, 1.5)]), (2, [(0, 1, True)]), (2, [(0, 1)])]:
            with self.assertRaises(ValueError):
                kruskal(size, edges)

    def test_equal_weights_keep_input_order(self):
        edges = [(2, 3, 1), (0, 1, 1), (1, 2, 1), (0, 3, 1)]
        self.assertEqual(kruskal(4, edges), edges[:3])
