import unittest
from concepts.algorithms.implementation.kmp.python.solution import find_all,prefix_table
import itertools
class Tests(unittest.TestCase):
    def test_against_naive_search_and_borders(self):
        words=lambda maximum:["".join(w) for n in range(maximum+1) for w in itertools.product("ab",repeat=n)]
        for pattern in words(4):
            want=[max((k for k in range(1,i+1) if pattern[:k]==pattern[i-k+1:i+1]),default=0) for i in range(len(pattern))]
            self.assertEqual(prefix_table(pattern),want)
            for text in words(6):
                expected=[i for i in range(len(text)+1) if text[i:i+len(pattern)]==pattern]
                self.assertEqual(find_all(text,pattern),expected)
        self.assertEqual(find_all("x😀😀😀","😀😀"),[1,2])
        self.assertEqual(find_all("aaaa","aa"),[0,1,2])
