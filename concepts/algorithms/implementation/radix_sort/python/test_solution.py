import random
import unittest

from concepts.algorithms.implementation.radix_sort.python.solution import radixSort


class SolutionTests(unittest.TestCase):
    def test_sorting(self):
        for values in [
            [],
            [1],
            [0, 0],
            [-1],
            [3, 1, 2, 1],
            [0, 10, 2, 100],
            [1, 2, 3],
            [3, 2, 1],
            [-3, 0, 2, -1, 2, -3],
            [-1, -10, -2, -100, -10],
            [-12, -2, -21, -1],
        ]:
            with self.subTest(values=values):
                self.assertEqual(radixSort(values.copy()), sorted(values))

    def test_arbitrary_precision_integers(self):
        values = [10**100, -(10**100), 0, -1, 1, -(10**100) + 1]
        self.assertEqual(radixSort(values), sorted(values))

    def test_random_integers(self):
        generator = random.Random(0)
        for sample in range(100):
            values = [generator.randint(-(10**30), 10**30) for _ in range(100)]
            with self.subTest(sample=sample):
                self.assertEqual(radixSort(values), sorted(values))
