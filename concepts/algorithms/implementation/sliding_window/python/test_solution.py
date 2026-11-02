import unittest

from concepts.algorithms.implementation.sliding_window.python.solution import (
    max_window_sum,
)


class SolutionTests(unittest.TestCase):
    def test_maximum_window_sum(self):
        for values, size, expected in [
            ([2, 1, 5, 1, 3, 2], 3, 9),
            ([-4, -2, -7, -1], 2, -6),
            ([-5, 0, 4, -1], 1, 4),
            ([1, 2, 3], 3, 6),
            ([1, 2, 3, 4], 2, 7),
            ([4, 3, 2, 1], 2, 7),
            ([0, 0, 0], 2, 0),
            ([-3], 1, -3),
        ]:
            with self.subTest(values=values, size=size):
                original = values.copy()
                self.assertEqual(max_window_sum(values, size), expected)
                self.assertEqual(values, original)

    def test_invalid_window_size(self):
        for values, size in [([1, 2, 3], -1), ([1, 2, 3], 0), ([1, 2, 3], 4), ([], 1)]:
            with self.subTest(values=values, size=size), self.assertRaises(ValueError):
                max_window_sum(values, size)
