import unittest

from concepts.algorithms.implementation.binary_search.python.solution import (
    binarySearch,
)


class SolutionTests(unittest.TestCase):
    def test_search(self):
        for values, target, expected in [
            ([], 1, -1),
            ([1], 1, 0),
            ([1, 3, 5], 1, 0),
            ([1, 3, 5], 5, 2),
            ([1, 3, 5], 2, -1),
        ]:
            with self.subTest(
                search=binarySearch.__name__, values=values, target=target
            ):
                self.assertEqual(binarySearch(values, target), expected)
