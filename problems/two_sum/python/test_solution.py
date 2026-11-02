import unittest

from problems.two_sum.python.solution import two_sum


class SolutionTests(unittest.TestCase):
    def test_two_sum(self):
        for values, target, expected in [
            ([2, 7, 11, 15], 9, [0, 1]),
            ([3, 2, 4], 6, [1, 2]),
            ([3, 3], 6, [0, 1]),
            ([-1, 2, 4], 3, [0, 2]),
            ([], 1, []),
            ([3], 6, []),
        ]:
            with self.subTest(values=values, target=target):
                self.assertEqual(two_sum(values, target), expected)
