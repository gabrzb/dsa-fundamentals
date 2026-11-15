import unittest

from concepts.algorithms.implementation.permutations.python.solution import permutations


class SolutionTests(unittest.TestCase):
    def test_permutations(self):
        for values, expected in [
            ([], [[]]),
            ([5], [[5]]),
            (
                [3, 1, 2],
                [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]],
            ),
            ([2, 1, 1], [[1, 1, 2], [1, 2, 1], [2, 1, 1]]),
            ([1, 1], [[1, 1]]),
            ([0, -1], [[-1, 0], [0, -1]]),
        ]:
            with self.subTest(values=values):
                original = values.copy()
                self.assertEqual(permutations(values), expected)
                self.assertEqual(values, original)

    def test_independent_permutations(self):
        result = permutations([1, 2])
        result[0][0] = 99
        self.assertEqual(result[1], [2, 1])
