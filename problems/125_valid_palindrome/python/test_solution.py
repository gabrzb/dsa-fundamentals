import unittest

from .solution import isPalindrome


class SolutionTests(unittest.TestCase):
    def test_palindromes_after_filtering(self):
        for value, expected in [
            ("A man, a plan, a canal: Panama", True),
            ("race a car", False),
            (" ", True),
            ("A, 7a", True),
            ("0P", False),
        ]:
            with self.subTest(value=value):
                self.assertEqual(isPalindrome(value), expected)
