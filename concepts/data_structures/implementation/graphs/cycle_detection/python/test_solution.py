import copy
import unittest

from concepts.data_structures.implementation.graphs.cycle_detection.python.solution import has_directed_cycle, has_undirected_cycle


class SolutionTests(unittest.TestCase):
    def test_directed_cycles_against_transitive_closure(self):
        for mask in range(1 << 9):
            graph = [[v for v in range(3) if mask & (1 << (u * 3 + v))] for u in range(3)]
            reach = [[v in graph[u] for v in range(3)] for u in range(3)]
            for k in range(3):
                for u in range(3):
                    for v in range(3):
                        reach[u][v] |= reach[u][k] and reach[k][v]
            original = copy.deepcopy(graph)
            self.assertEqual(has_directed_cycle(graph), any(reach[v][v] for v in range(3)))
            self.assertEqual(graph, original)

    def test_undirected_cycles_against_forest_edge_count(self):
        edges = [(u, v) for u in range(4) for v in range(u + 1, 4)]
        for mask in range(1 << len(edges)):
            graph = [[] for _ in range(4)]
            parent = list(range(4))

            def root(v):
                while parent[v] != v:
                    v = parent[v]
                return v

            edge_count = 0
            for index, (u, v) in enumerate(edges):
                if mask & (1 << index):
                    graph[u].append(v)
                    graph[v].append(u)
                    parent[root(u)] = root(v)
                    edge_count += 1
            components = len({root(v) for v in range(4)})
            original = copy.deepcopy(graph)
            self.assertEqual(has_undirected_cycle(graph), edge_count > 4 - components)
            self.assertEqual(graph, original)

    def test_completed_vertices_parent_edges_parallel_edges_and_deep_chains(self):
        self.assertFalse(has_directed_cycle([[1, 2], [], [1]]))
        self.assertFalse(has_directed_cycle([[1, 1], []]))
        self.assertTrue(has_directed_cycle([[], [2], [1]]))
        self.assertFalse(has_undirected_cycle([[1], [0, 2], [1]]))
        self.assertTrue(has_undirected_cycle([[1, 1], [0, 0]]))
        self.assertTrue(has_undirected_cycle([[0]]))
        self.assertFalse(has_directed_cycle([]))
        self.assertFalse(has_undirected_cycle([]))
        graph = [[v + 1] for v in range(2999)] + [[]]
        self.assertFalse(has_directed_cycle(graph))
        graph[-1].append(0)
        self.assertTrue(has_directed_cycle(graph))
        for solve in (has_directed_cycle, has_undirected_cycle):
            with self.assertRaises(ValueError):
                solve([[-1]])
