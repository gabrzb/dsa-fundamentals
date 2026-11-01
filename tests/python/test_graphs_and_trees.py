import unittest

from concepts.data_structures.implementation.graphs.bfs_adj_matrix.python.solution import (
    bfs,
)
from concepts.data_structures.implementation.graphs.dfs_adj_list.python.solution import (
    dfs,
)
from concepts.data_structures.implementation.graphs.dijkstra_path.python.solution import (
    dijkstra_list,
)
from concepts.data_structures.implementation.tree.bt_base.python.binary_tree import (
    BinaryNode,
)
from concepts.data_structures.implementation.tree.bt_comparison.python.solution import (
    compare,
)
from concepts.data_structures.implementation.tree.bt_dfs.python.solution import (
    dfs as tree_dfs,
)
from concepts.data_structures.implementation.tree.bt_traversal.breadth_first.python.solution import (
    bfs as tree_bfs,
)
from concepts.data_structures.implementation.tree.bt_traversal.depth_first.python.bt_in_order import (
    in_order_search,
)
from concepts.data_structures.implementation.tree.bt_traversal.depth_first.python.bt_post_order import (
    post_order_search,
)
from concepts.data_structures.implementation.tree.bt_traversal.depth_first.python.bt_pre_order import (
    pre_order_search,
)


class GraphAndTreeTests(unittest.TestCase):
    def test_bfs_paths(self):
        graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]
        self.assertEqual(bfs(graph, 0, 2), [0, 1, 2])
        self.assertIsNone(bfs(graph, 0, 3))
        self.assertEqual(bfs(graph, 0, 0), [0])

    def test_dfs_cycles_unreachable_and_same_vertex(self):
        graph = [[[1, 1]], [[0, 1], [2, 1]], [], []]
        self.assertEqual(dfs(graph, 0, 2), [0, 1, 2])
        self.assertIsNone(dfs(graph, 0, 3))
        self.assertEqual(dfs(graph, 0, 0), [0])

    def test_dijkstra_chooses_lowest_weight(self):
        graph = [[[1, 4], [2, 1]], [[3, 1]], [[1, 2], [3, 5]], [], []]
        self.assertEqual(dijkstra_list(0, 3, graph), [0, 2, 1, 3])
        self.assertIsNone(dijkstra_list(0, 4, graph))
        self.assertEqual(dijkstra_list(2, 2, graph), [2])

    def test_tree_traversals_and_search(self):
        tree = BinaryNode(2, BinaryNode(1), BinaryNode(3))
        for traverse, expected in [
            (in_order_search, [1, 2, 3]),
            (pre_order_search, [2, 1, 3]),
            (post_order_search, [1, 3, 2]),
        ]:
            with self.subTest(traverse=traverse.__name__):
                self.assertEqual(traverse(tree), expected)
                self.assertEqual(traverse(None), [])
        for search in (tree_bfs, tree_dfs):
            self.assertTrue(search(tree, 1))
            self.assertFalse(search(tree, 4))
            self.assertFalse(search(None, 1))

    def test_tree_comparison_checks_structure_and_values(self):
        self.assertTrue(compare(None, None))
        self.assertTrue(compare(BinaryNode(1), BinaryNode(1)))
        self.assertFalse(compare(BinaryNode(1), None))
        self.assertFalse(compare(BinaryNode(1), BinaryNode(2)))
        self.assertFalse(
            compare(BinaryNode(1, BinaryNode(2)), BinaryNode(1, None, BinaryNode(2)))
        )
