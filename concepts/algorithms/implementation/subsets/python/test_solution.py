import unittest

from concepts.algorithms.implementation.subsets.python.solution import subsets


class SolutionTests(unittest.TestCase):
    def test_subsets(self):
        for values, expected in [
            ([], [[]]),
            ([1], [[], [1]]),
            ([2, 1], [[], [1], [1, 2], [2]]),
            ([2, 1, 2], [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]),
            ([-1, 0], [[], [-1], [-1, 0], [0]]),
        ]:
            with self.subTest(values=values):
                original = values.copy()
                self.assertEqual(subsets(values), expected)
                self.assertEqual(values, original)

    def test_independent_subsets(self):
        result = subsets([1, 2])
        result[2][0] = 99
        self.assertEqual(result[1], [1])
        self.assertEqual(result[3], [2])
