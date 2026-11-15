import unittest

from concepts.algorithms.implementation.n_queens.python.solution import n_queens


class SolutionTests(unittest.TestCase):
    def test_solution_counts_and_queen_positions(self):
        for n, expected in enumerate([1, 1, 0, 0, 2, 10, 4, 40, 92]):
            with self.subTest(n=n):
                solutions = n_queens(n)
                self.assertEqual(len(solutions), expected)
                unique = {tuple(solution) for solution in solutions}
                self.assertEqual(len(unique), expected)
                for placement in solutions:
                    self.assertEqual(len(placement), n)
                    self.assertEqual(set(placement), set(range(n)))
                    rising = {row + column for row, column in enumerate(placement)}
                    falling = {row - column for row, column in enumerate(placement)}
                    self.assertEqual(len(rising), n)
                    self.assertEqual(len(falling), n)

    def test_four_queens_and_independent_solutions(self):
        expected = [[1, 3, 0, 2], [2, 0, 3, 1]]
        result = n_queens(4)
        self.assertEqual(result, expected)
        result[0][0] = 99
        self.assertEqual(result[1], expected[1])

    def test_invalid_board_size(self):
        with self.assertRaises(ValueError):
            n_queens(-1)
