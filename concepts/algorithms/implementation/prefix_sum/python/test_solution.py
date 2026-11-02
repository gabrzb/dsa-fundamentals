import unittest

from concepts.algorithms.implementation.prefix_sum.python.solution import (
    prefix_sums,
    range_sum,
)


class SolutionTests(unittest.TestCase):
    def test_prefix_sums(self):
        for values, expected in [
            ([], [0]),
            ([5], [0, 5]),
            ([2, -1, 3, 0, -4], [0, 2, 1, 4, 4, 0]),
            ([-3, -2], [0, -3, -5]),
        ]:
            with self.subTest(values=values):
                original = values.copy()
                self.assertEqual(prefix_sums(values), expected)
                self.assertEqual(values, original)

    def test_all_ranges(self):
        values = [2, -1, 3, 0, -4]
        prefix = prefix_sums(values)
        for start in range(len(values) + 1):
            for end in range(start, len(values) + 1):
                with self.subTest(start=start, end=end):
                    self.assertEqual(
                        range_sum(prefix, start, end), sum(values[start:end])
                    )
        self.assertEqual(range_sum(prefix_sums([]), 0, 0), 0)

    def test_invalid_range(self):
        for prefix, start, end in [
            ([0, 1, 3], -1, 1),
            ([0, 1, 3], 2, 1),
            ([0, 1, 3], 0, 3),
            ([], 0, 0),
        ]:
            with (
                self.subTest(prefix=prefix, start=start, end=end),
                self.assertRaises(IndexError),
            ):
                range_sum(prefix, start, end)
