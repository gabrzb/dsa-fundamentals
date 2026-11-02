import unittest

from problems.valid_anagram.solution_1.python.solution import isAnagram as count_anagram


class SolutionTests(unittest.TestCase):
    def test_anagrams(self):
        for left, right, expected in [
            ("anagram", "nagaram", True),
            ("rat", "car", False),
            ("", "", True),
            ("a", "aa", False),
            ("aab", "abb", False),
        ]:
            with self.subTest(check=count_anagram.__module__, left=left, right=right):
                self.assertEqual(count_anagram(left, right), expected)
