import copy
import unittest

from concepts.data_structures.implementation.graphs.connected_components.python.solution import connected_components


class SolutionTests(unittest.TestCase):
    def test_every_four_vertex_undirected_graph_against_reachability(self):
        edges = [(u, v) for u in range(4) for v in range(u + 1, 4)]
        for mask in range(1 << len(edges)):
            graph = [[] for _ in range(4)]
            reach = [[u == v for v in range(4)] for u in range(4)]
            for index, (u, v) in enumerate(edges):
                if mask & (1 << index):
                    graph[u].append(v)
                    graph[v].append(u)
                    reach[u][v] = reach[v][u] = True
            for k in range(4):
                for u in range(4):
                    for v in range(4):
                        reach[u][v] |= reach[u][k] and reach[k][v]
            original = copy.deepcopy(graph)
            result = connected_components(graph)
            labels = [-1] * 4
            for group, vertices in enumerate(result):
                self.assertTrue(vertices)
                for vertex in vertices:
                    self.assertEqual(labels[vertex], -1)
                    labels[vertex] = group
            self.assertNotIn(-1, labels)
            for u in range(4):
                for v in range(4):
                    self.assertEqual(labels[u] == labels[v], reach[u][v])
            self.assertEqual(graph, original)

    def test_isolates_loops_parallel_edges_and_empty_graph(self):
        self.assertEqual(connected_components([[1, 2], [0], [0], [4], [3], []]), [[0, 1, 2], [3, 4], [5]])
        self.assertEqual(connected_components([[0, 1, 1], [0, 0], []]), [[0, 1], [2]])
        self.assertEqual(connected_components([]), [])
        with self.assertRaises(ValueError):
            connected_components([[1]])
