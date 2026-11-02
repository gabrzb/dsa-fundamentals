import unittest

from problems.minimum_distance.python.solution import MinDistance


class SolutionTests(unittest.TestCase):
    def test_minimum_distance(self):
        self.assertEqual(MinDistance([1, 2, 3, 2], 2, 2), 1)
        self.assertEqual(MinDistance([1], 1, 0), 0)
