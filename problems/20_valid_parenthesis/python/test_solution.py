import unittest

from .solution import isValid


class SolutionTests(unittest.TestCase):
    def test_parentheses(self):
        for value, expected in [
            ("", True),
            ("()[]{}", True),
            ("([])", True),
            ("([)]", False),
            ("]", False),
            ("((", False),
        ]:
            with self.subTest(value=value):
                self.assertEqual(isValid(value), expected)
