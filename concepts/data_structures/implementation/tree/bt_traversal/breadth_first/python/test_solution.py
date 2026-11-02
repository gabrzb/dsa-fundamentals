import unittest

from concepts.data_structures.implementation.tree.bt_base.python.binary_tree import (
    BinaryNode,
)
from concepts.data_structures.implementation.tree.bt_traversal.breadth_first.python.solution import (
    bfs as tree_bfs,
)


class SolutionTests(unittest.TestCase):
    def test_search(self):
        tree = BinaryNode(2, BinaryNode(1), BinaryNode(3))
        self.assertTrue(tree_bfs(tree, 1))
        self.assertFalse(tree_bfs(tree, 4))
        self.assertFalse(tree_bfs(None, 1))
