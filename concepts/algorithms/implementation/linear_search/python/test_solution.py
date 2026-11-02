import unittest

from concepts.algorithms.implementation.linear_search.python.solution import (
    linearSearch,
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
                search=linearSearch.__name__, values=values, target=target
            ):
                self.assertEqual(linearSearch(values, target), expected)
