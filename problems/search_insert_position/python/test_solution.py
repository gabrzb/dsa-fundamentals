import unittest

from problems.search_insert_position.python.solution import searchInsertPosition


class SolutionTests(unittest.TestCase):
    def test_insert_position(self):
        for values, target, expected in [
            ([], 2, 0),
            ([1, 3, 5], 0, 0),
            ([1, 3, 5], 2, 1),
            ([1, 3, 5], 5, 2),
            ([1, 3, 5], 7, 3),
        ]:
            with self.subTest(values=values, target=target):
                self.assertEqual(searchInsertPosition(values, target), expected)
