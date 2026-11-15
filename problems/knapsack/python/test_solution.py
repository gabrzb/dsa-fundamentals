import itertools
import unittest

from problems.knapsack.python.solution import memoized, tabulated


def enumerate_subsets(weights, values, capacity):
    result = 0
    for mask in range(1 << len(weights)):
        chosen = [i for i in range(len(weights)) if mask & (1 << i)]
        if sum(weights[i] for i in chosen) <= capacity:
            result = max(result, sum(values[i] for i in chosen))
    return result


class SolutionTests(unittest.TestCase):
    def test_against_all_subsets(self):
        for weights in itertools.product(range(1, 4), repeat=4):
            weights = list(weights)
            values = [i * (w + 1) for i, w in enumerate(weights)]
            for capacity in range(9):
                expected = enumerate_subsets(weights, values, capacity)
                for solve in (memoized, tabulated):
                    original = weights.copy(), values.copy()
                    self.assertEqual(solve(weights, values, capacity), expected)
                    self.assertEqual((weights, values), original)

    def test_no_item_reuse_and_boundary_cases(self):
        for solve in (memoized, tabulated):
            self.assertEqual(solve([2, 3, 4], [4, 5, 7], 5), 9)
            self.assertEqual(solve([2], [3], 4), 3)
            self.assertEqual(solve([2, 2], [3, 3], 4), 6)
            self.assertEqual(solve([], [], 5), 0)
            self.assertEqual(solve([2], [3], 0), 0)
            self.assertEqual(solve([2], [0], 2), 0)
            self.assertEqual(solve([5], [8], 3), 0)

    def test_invalid_inputs(self):
        for solve in (memoized, tabulated):
            for args in [([1], [], 2), ([0], [1], 2), ([1], [-1], 2), ([], [], -1), ([1.5], [2], 3), ([1], [True], 3)]:
                with self.assertRaises(ValueError):
                    solve(*args)
