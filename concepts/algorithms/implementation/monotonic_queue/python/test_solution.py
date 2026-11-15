import unittest
from concepts.algorithms.implementation.monotonic_queue.python.solution import window_maxima
import itertools
class Tests(unittest.TestCase):
    def test_against_window_scans(self):
        for size in range(1,7):
            for items in itertools.product([-1,0,1],repeat=size):
                values=list(items)
                for window in range(1,size+1):
                    self.assertEqual(window_maxima(values,window),[max(values[i:i+window]) for i in range(size-window+1)])
                self.assertEqual(values,list(items))
        for values,size in [([],1),([1],0),([1],2),([1],1.5)]:
            with self.assertRaises(ValueError):window_maxima(values,size)
