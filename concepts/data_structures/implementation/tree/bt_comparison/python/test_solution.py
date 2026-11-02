import unittest

from concepts.data_structures.implementation.tree.bt_base.python.binary_tree import (
    BinaryNode,
)
from concepts.data_structures.implementation.tree.bt_comparison.python.solution import (
    compare,
)


class SolutionTests(unittest.TestCase):
    def test_tree_comparison_checks_structure_and_values(self):
        self.assertTrue(compare(None, None))
        self.assertTrue(compare(BinaryNode(1), BinaryNode(1)))
        self.assertFalse(compare(BinaryNode(1), None))
        self.assertFalse(compare(BinaryNode(1), BinaryNode(2)))
        self.assertFalse(
            compare(BinaryNode(1, BinaryNode(2)), BinaryNode(1, None, BinaryNode(2)))
        )
