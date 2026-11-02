import unittest

from problems.longest_consecutive_sequence.python.solution import (
    Solution as Consecutive,
)


class SolutionTests(unittest.TestCase):
    def test_consecutive_sequence(self):
        for values, expected in [
            ([], 0),
            ([100, 4, 200, 1, 3, 2], 4),
            ([1, 2, 0, 1], 3),
            ([-2, -1, 0], 3),
        ]:
            with self.subTest(values=values):
                self.assertEqual(Consecutive().longestConsecutive(values), expected)
