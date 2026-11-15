import unittest
from concepts.algorithms.implementation.monotonic_stack.python.solution import next_greater_indices
import itertools
class Tests(unittest.TestCase):
    def test_against_rightward_scans(self):
        for size in range(7):
            for items in itertools.product([-1,0,1],repeat=size):
                values=list(items)
                want=[next((j for j in range(i+1,size) if values[j]>values[i]),-1) for i in range(size)]
                self.assertEqual(next_greater_indices(values),want)
                self.assertEqual(values,list(items))
