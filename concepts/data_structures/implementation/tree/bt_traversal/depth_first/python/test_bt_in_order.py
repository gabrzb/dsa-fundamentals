import unittest

from concepts.data_structures.implementation.tree.bt_base.python.binary_tree import (
    BinaryNode,
)
from concepts.data_structures.implementation.tree.bt_traversal.depth_first.python.bt_in_order import (
    in_order_search,
)


class SolutionTests(unittest.TestCase):
    def test_traversal(self):
        tree = BinaryNode(2, BinaryNode(1), BinaryNode(3))
        self.assertEqual(in_order_search(tree), [1, 2, 3])
        self.assertEqual(in_order_search(None), [])
