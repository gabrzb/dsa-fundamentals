import unittest
from concepts.data_structures.implementation.trie.python.solution import Trie
import itertools
class Tests(unittest.TestCase):
    def test_against_a_word_set_and_pruning(self):
        words=["".join(w) for n in range(4) for w in itertools.product("ab",repeat=n)]
        trie=Trie();model=set();state=12345
        for _ in range(200):
            state=(1664525*state+1013904223)&0xffffffff
            word=words[(state>>8)%len(words)]
            if state&1:self.assertEqual(trie.insert(word),word not in model);model.add(word)
            else:self.assertEqual(trie.remove(word),word in model);model.discard(word)
            for query in words:
                self.assertEqual(trie.contains(query),query in model)
                self.assertEqual(trie.starts_with(query),not query or any(w.startswith(query) for w in model))
        for word in list(model):self.assertTrue(trie.remove(word))
        self.assertFalse(trie.starts_with("a"));self.assertTrue(trie.starts_with(""))
        long="z"*2000;self.assertTrue(trie.insert(long));self.assertTrue(trie.remove(long));self.assertFalse(trie.starts_with("z"))
        for op in [trie.insert,trie.remove,trie.contains,trie.starts_with]:
            with self.assertRaises(ValueError):op("zz!")
        self.assertFalse(trie.starts_with("zz"))
