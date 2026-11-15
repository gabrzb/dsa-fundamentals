import itertools
import unittest

from concepts.data_structures.implementation.tree.avl.python.solution import insert, remove


class SolutionTests(unittest.TestCase):
    def check_tree(self, root, expected):
        seen = set()
        values = []

        def visit(node, low, high):
            if node is None:
                return 0
            self.assertNotIn(id(node), seen)
            seen.add(id(node))
            self.assertLess(low, node.value)
            self.assertLess(node.value, high)
            left = visit(node.left, low, node.value)
            values.append(node.value)
            right = visit(node.right, node.value, high)
            self.assertLessEqual(abs(left - right), 1)
            self.assertEqual(node.height, 1 + max(left, right))
            return node.height

        visit(root, float("-inf"), float("inf"))
        self.assertEqual(values, sorted(expected))

    def test_four_insertion_rotations(self):
        for order in ([30, 20, 10], [10, 20, 30], [30, 10, 20], [10, 30, 20]):
            root = None
            for value in order:
                root = insert(root, value)
            self.assertEqual((root.value, root.left.value, root.right.value), (20, 10, 30))
            self.check_tree(root, {10, 20, 30})

    def test_all_small_insert_and_delete_orders(self):
        for insertion in itertools.permutations([-2, 0, 1, 3]):
            for deletion in itertools.permutations(insertion):
                root = None
                expected = set()
                for value in insertion:
                    root = insert(root, value)
                    expected.add(value)
                    self.check_tree(root, expected)
                self.assertIs(insert(root, insertion[0]), root)
                self.assertIs(remove(root, 99), root)
                self.check_tree(root, expected)
                for value in deletion:
                    root = remove(root, value)
                    expected.remove(value)
                    self.check_tree(root, expected)
                self.assertIsNone(remove(root, 99))

    def test_deletion_with_balanced_heavy_child(self):
        root = None
        for value in [4, 2, 5, 1, 3]:
            root = insert(root, value)
        root = remove(root, 5)
        self.assertEqual(root.value, 2)
        self.assertEqual(root.right.left.value, 3)
        self.check_tree(root, {1, 2, 3, 4})

    def test_large_mixed_operations_and_complete_removal(self):
        root = None
        expected = set()
        for value in range(256):
            root = insert(root, value)
            expected.add(value)
            self.check_tree(root, expected)
        state = 12345
        for _ in range(1000):
            state = (1664525 * state + 1013904223) & 0xFFFFFFFF
            value = (state >> 8) % 320
            if state & 1:
                root = insert(root, value)
                expected.add(value)
            else:
                root = remove(root, value)
                expected.discard(value)
            self.check_tree(root, expected)
        for value in sorted(expected):
            root = remove(root, value)
            expected.remove(value)
            self.check_tree(root, expected)
        self.assertIsNone(root)
