import copy
import unittest

from concepts.data_structures.implementation.graphs.bfs_adj_list.python.solution import bfs


class SolutionTests(unittest.TestCase):
    def test_all_three_vertex_graphs_against_all_pairs_distances(self):
        for mask in range(1 << 9):
            graph = [[v for v in range(3) if mask & (1 << (u * 3 + v))] for u in range(3)]
            original = copy.deepcopy(graph)
            distance = [[0 if u == v else 4 for v in range(3)] for u in range(3)]
            for u in range(3):
                for v in graph[u]:
                    distance[u][v] = min(distance[u][v], 1)
            for k in range(3):
                for u in range(3):
                    for v in range(3):
                        distance[u][v] = min(distance[u][v], distance[u][k] + distance[k][v])
            for source in range(3):
                for target in range(3):
                    path = bfs(graph, source, target)
                    if distance[source][target] == 4:
                        self.assertIsNone(path)
                    else:
                        self.assertEqual((path[0], path[-1]), (source, target))
                        self.assertEqual(len(path) - 1, distance[source][target])
                        self.assertTrue(all(v in graph[u] for u, v in zip(path, path[1:])))
            self.assertEqual(graph, original)

    def test_neighbor_order_parallel_edges_and_disconnected_target(self):
        graph = [[2, 1, 2], [3], [3], [4], [], []]
        self.assertEqual(bfs(graph, 0, 4), [0, 2, 3, 4])
        self.assertEqual(bfs(graph, 2, 2), [2])
        self.assertIsNone(bfs(graph, 0, 5))

    def test_invalid_vertices_including_unreachable_edges(self):
        for graph, source, target in [([], 0, 0), ([[]], -1, 0), ([[]], 0, 1), ([[-1]], 0, 0), ([[], [2]], 0, 0), ([[]], True, 0), ([[0.5]], 0, 0)]:
            with self.assertRaises(ValueError):
                bfs(graph, source, target)
