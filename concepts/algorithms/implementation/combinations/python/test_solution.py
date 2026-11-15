import unittest

from concepts.algorithms.implementation.combinations.python.solution import combinations


class SolutionTests(unittest.TestCase):
    def test_combinations(self):
        for n, k, expected in [
            (4, 2, [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]),
            (3, 1, [[1], [2], [3]]),
            (3, 3, [[1, 2, 3]]),
            (3, 0, [[]]),
            (0, 0, [[]]),
            (0, 1, []),
            (2, 3, []),
        ]:
            with self.subTest(n=n, k=k):
                self.assertEqual(combinations(n, k), expected)

    def test_invalid_size(self):
        for n, k in [(-1, 0), (3, -1)]:
            with self.subTest(n=n, k=k), self.assertRaises(ValueError):
                combinations(n, k)

    def test_independent_combinations(self):
        result = combinations(3, 2)
        result[0][0] = 99
        self.assertEqual(result[1], [1, 3])
