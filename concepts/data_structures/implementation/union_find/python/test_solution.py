import unittest

from concepts.data_structures.implementation.union_find.python.solution import UnionFind


class SolutionTests(unittest.TestCase):
    def test_against_component_relabeling(self):
        sets = UnionFind(12)
        labels = list(range(12))
        state = 12345
        for _ in range(100):
            state = (1664525 * state + 1013904223) & 0xFFFFFFFF
            a, b = (state >> 8) % 12, (state >> 16) % 12
            left, right = labels[a], labels[b]
            self.assertEqual(sets.union(a, b), left != right)
            labels = [left if label == right else label for label in labels]
            self.assertEqual(sets.components, len(set(labels)))
            for i in range(12):
                self.assertEqual(sets.component_size(i), labels.count(labels[i]))
                for j in range(12):
                    self.assertEqual(sets.connected(i, j), labels[i] == labels[j])

    def test_full_path_compression_and_size_attachment(self):
        sets = UnionFind(9)
        for a, b in [(0, 1), (2, 3), (0, 2), (4, 5), (6, 7), (4, 6), (0, 4)]:
            self.assertTrue(sets.union(a, b))
        self.assertEqual(sets._parent[7], 6)
        self.assertEqual(sets.find(7), 0)
        self.assertEqual([sets._parent[v] for v in [7, 6, 4]], [0, 0, 0])
        self.assertTrue(sets.union(8, 0))
        self.assertEqual(sets.find(8), 0)
        self.assertFalse(sets.union(0, 0))
        self.assertEqual((sets.components, sets.component_size(8)), (1, 9))

    def test_empty_and_invalid_indices(self):
        self.assertEqual(UnionFind(0).components, 0)
        for size in (-1, 1.5, True):
            with self.assertRaises(ValueError):
                UnionFind(size)
        sets = UnionFind(2)
        for value in (-1, 2, True, 0.5):
            with self.assertRaises(ValueError):
                sets.find(value)
        with self.assertRaises(ValueError):
            sets.union(0, 2)
        with self.assertRaises(ValueError):
            sets.connected(0, 2)
        with self.assertRaises(ValueError):
            sets.component_size(2)
