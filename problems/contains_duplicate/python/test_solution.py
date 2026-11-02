import unittest

from problems.contains_duplicate.python.solution import containsDuplicate


class SolutionTests(unittest.TestCase):
    def test_duplicates(self):
        for values, expected in [
            ([], False),
            ([1], False),
            ([1, 2, 1], True),
            ([0, 0], True),
        ]:
            with self.subTest(values=values):
                self.assertEqual(containsDuplicate(values), expected)
