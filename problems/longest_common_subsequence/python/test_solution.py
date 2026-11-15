import itertools
import unittest

from problems.longest_common_subsequence.python.solution import memoized, tabulated


def subsequences(text):
    return {"".join(char for i, char in enumerate(text) if mask & (1 << i)) for mask in range(1 << len(text))}


class SolutionTests(unittest.TestCase):
    def test_against_subsequence_intersection(self):
        words = ["".join(chars) for length in range(5) for chars in itertools.product("ab", repeat=length)]
        for a in words:
            for b in words:
                expected = max(map(len, subsequences(a) & subsequences(b)))
                for solve in (memoized, tabulated):
                    self.assertEqual(solve(a, b), expected, (a, b))

    def test_order_duplicates_and_unicode(self):
        for solve in (memoized, tabulated):
            for a, b, expected in [("abcde", "ace", 3), ("abc", "def", 0), ("aaaa", "aa", 2), ("abc", "cba", 1), ("", "abc", 0), ("x😀y😀", "😀😀", 2), ("é", "e\u0301", 0)]:
                self.assertEqual(solve(a, b), expected)
