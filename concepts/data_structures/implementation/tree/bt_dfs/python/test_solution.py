import unittest

from concepts.data_structures.implementation.tree.bt_base.python.binary_tree import (
    BinaryNode,
)
from concepts.data_structures.implementation.tree.bt_dfs.python.solution import (
    dfs as tree_dfs,
)


class SolutionTests(unittest.TestCase):
    def test_search(self):
        tree = BinaryNode(2, BinaryNode(1), BinaryNode(3))
        self.assertTrue(tree_dfs(tree, 1))
        self.assertFalse(tree_dfs(tree, 4))
        self.assertFalse(tree_dfs(None, 1))
