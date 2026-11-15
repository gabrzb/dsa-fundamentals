import math
import unittest

from problems.climbing_stairs.python.solution import memoized, tabulated


class SolutionTests(unittest.TestCase):
    def test_counts_against_step_order_combinations(self):
        for n in range(46):
            expected = sum(math.comb(n - twos, twos) for twos in range(n // 2 + 1))
            for solve in (memoized, tabulated):
                self.assertEqual(solve(n), expected)
        self.assertEqual(memoized(45), 1836311903)

    def test_invalid_sizes(self):
        for solve in (memoized, tabulated):
            for n in (-1, 46, 1.5, True):
                with self.assertRaises(ValueError):
                    solve(n)
