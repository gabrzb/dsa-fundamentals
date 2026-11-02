import unittest

from problems.group_anagrams.python.solution import Solution as Anagrams


class SolutionTests(unittest.TestCase):
    def test_group_anagrams(self):
        result = Anagrams().groupAnagrams(
            ["eat", "tea", "tan", "ate", "nat", "bat", ""]
        )
        self.assertEqual(
            sorted((sorted(group) for group in result)),
            sorted([["ate", "eat", "tea"], ["nat", "tan"], ["bat"], [""]]),
        )
        self.assertEqual(Anagrams().groupAnagrams([]), [])
