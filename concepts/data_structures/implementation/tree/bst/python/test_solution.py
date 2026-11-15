import itertools
import unittest

from concepts.data_structures.implementation.tree.bst.python.solution import insert, remove
from concepts.data_structures.implementation.tree.bt_dfs.python.solution import dfs
from concepts.data_structures.implementation.tree.bt_traversal.depth_first.python.bt_in_order import in_order_search


class SolutionTests(unittest.TestCase):
    def check_tree(self, root, expected):
        visited = set()

        def visit(node, low, high):
            if node is None:
                return
            self.assertNotIn(id(node), visited)
            visited.add(id(node))
            self.assertLess(low, node.value)
            self.assertLess(node.value, high)
            visit(node.left, low, node.value)
            visit(node.right, node.value, high)

        visit(root, float("-inf"), float("inf"))
        self.assertEqual(in_order_search(root), sorted(expected))

    def test_all_small_insert_and_delete_orders(self):
        for insertion in itertools.permutations([-2, 0, 1, 3]):
            for deletion in itertools.permutations(insertion):
                root = None
                expected = set()
                for value in insertion:
                    root = insert(root, value)
                    expected.add(value)
                    self.check_tree(root, expected)
                    self.assertTrue(dfs(root, value))
                original = root
                self.assertIs(insert(root, insertion[0]), original)
                self.assertIs(remove(root, 99), original)
                self.check_tree(root, expected)
                for value in deletion:
                    root = remove(root, value)
                    expected.remove(value)
                    self.check_tree(root, expected)
                    self.assertFalse(dfs(root, value))
                self.assertIsNone(root)
                self.assertIsNone(remove(root, 99))

    def test_successor_with_right_child_and_root_replacement(self):
        root = None
        for value in [8, 3, 12, 10, 14, 11]:
            root = insert(root, value)
        root = remove(root, 8)
        self.assertEqual(root.value, 10)
        self.assertEqual(root.right.left.value, 11)
        self.check_tree(root, {3, 10, 11, 12, 14})
        root = insert(None, 2)
        root = insert(root, 1)
        child = root.left
        self.assertIs(remove(root, 2), child)
