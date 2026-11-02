import unittest

from problems.valid_anagram.solution_2.python.solution import isAnagram as map_anagram


class SolutionTests(unittest.TestCase):
    def test_anagrams(self):
        for left, right, expected in [
            ("anagram", "nagaram", True),
            ("rat", "car", False),
            ("", "", True),
            ("a", "aa", False),
            ("aab", "abb", False),
        ]:
            with self.subTest(check=map_anagram.__module__, left=left, right=right):
                self.assertEqual(map_anagram(left, right), expected)
