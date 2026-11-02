import unittest

from concepts.algorithms.implementation.two_pointers.python.solution import reverse_array


class SolutionTests(unittest.TestCase):
    def test_reverse_array_in_place(self):
        for values in [[], [1], [1, 2, 3, 4], [-1, 0, 2], [1, 2, 1, 2]]:
            with self.subTest(values=values):
                result = values.copy()
                self.assertIsNone(reverse_array(result))
                self.assertEqual(result, values[::-1])
                reverse_array(result)
                self.assertEqual(result, values)
