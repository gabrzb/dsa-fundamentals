import copy
import unittest

from concepts.data_structures.implementation.graphs.dijkstra_heap.python.solution import dijkstra


class SolutionTests(unittest.TestCase):
    def test_all_small_graphs_against_floyd_warshall(self):
        for mask in range(1 << 9):
            graph = [[(v, (u * 3 + v) % 4) for v in range(3) if mask & (1 << (u * 3 + v))] for u in range(3)]
            original = copy.deepcopy(graph)
            distance = [[0 if u == v else float("inf") for v in range(3)] for u in range(3)]
            for u in range(3):
                for v, weight in graph[u]:
                    distance[u][v] = min(distance[u][v], weight)
            for k in range(3):
                for u in range(3):
                    for v in range(3):
                        distance[u][v] = min(distance[u][v], distance[u][k] + distance[k][v])
            for source in range(3):
                for target in range(3):
                    result = dijkstra(graph, source, target)
                    if distance[source][target] == float("inf"):
                        self.assertIsNone(result)
                    else:
                        cost, path = result
                        self.assertEqual(cost, distance[source][target])
                        self.assertEqual((path[0], path[-1]), (source, target))
                        self.assertEqual(len(path), len(set(path)))
                        self.assertEqual(sum(min(w for v, w in graph[u] if v == to) for u, to in zip(path, path[1:])), cost)
            self.assertEqual(graph, original)

    def test_stale_entries_parallel_edges_and_zero_cycles(self):
        graph = [[(1, 4), (2, 1)], [(3, 1)], [(1, 2), (3, 5)], [], []]
        self.assertEqual(dijkstra(graph, 0, 3), (4, [0, 2, 1, 3]))
        self.assertIsNone(dijkstra(graph, 0, 4))
        self.assertEqual(dijkstra([[(1, 9), (1, 0)], [(0, 0)]], 0, 1), (0, [0, 1]))
        self.assertEqual(dijkstra([[]], 0, 0), (0, [0]))
        self.assertEqual(dijkstra([[(1, 10**30)], []], 0, 1)[0], 10**30)

    def test_invalid_inputs_are_checked_before_early_return(self):
        for graph, source, target in [([], 0, 0), ([[]], -1, 0), ([[]], 0, 1), ([[(1, 0)]], 0, 0), ([[(0, -1)]], 0, 0), ([[(0, 1.5)]], 0, 0), ([[(0, True)]], 0, 0), ([[(0,)]], 0, 0)]:
            with self.assertRaises(ValueError):
                dijkstra(graph, source, target)
