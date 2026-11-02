import unittest

from concepts.algorithms.implementation.recursion.python.solution import solve


class SolutionTests(unittest.TestCase):
    def test_maze_path_and_unreachable_exit(self):
        self.assertEqual(solve(["   "], "x", (0, 0), (2, 0)), [(0, 0), (1, 0), (2, 0)])
        self.assertEqual(solve([" x "], "x", (0, 0), (2, 0)), [])
        self.assertEqual(solve([" "], "x", (0, 0), (0, 0)), [(0, 0)])
