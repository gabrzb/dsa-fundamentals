import unittest

from concepts.algorithms.implementation.insertion_sort.python.solution import (
    insertionSort,
)


class SolutionTests(unittest.TestCase):
    def test_sorting(self):
        for values in [
            [],
            [1],
            [3, 1, 2, 1],
            [0, 10, 2, 100],
            [1, 2, 3],
            [3, 2, 1],
            [-3, 0, 2, -1],
        ]:
            with self.subTest(values=values):
                self.assertEqual(insertionSort(values.copy()), sorted(values))
