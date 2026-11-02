import unittest

from concepts.algorithms.implementation.radix_sort.python.solution import radixSort


class SolutionTests(unittest.TestCase):
    def test_sorting(self):
        for values in [[], [1], [3, 1, 2, 1], [0, 10, 2, 100], [1, 2, 3], [3, 2, 1]]:
            with self.subTest(values=values):
                self.assertEqual(radixSort(values.copy()), sorted(values))

    def test_radix_sort_rejects_negative_integers(self):
        with self.assertRaises(ValueError):
            radixSort([-1, 2])
