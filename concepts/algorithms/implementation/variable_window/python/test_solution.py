import unittest
from concepts.algorithms.implementation.variable_window.python.solution import min_subarray_len
import itertools
class Tests(unittest.TestCase):
    def test_against_all_subarrays(self):
        for length in range(6):
            for items in itertools.product([1,2,3], repeat=length):
                values=list(items)
                for target in range(1,10):
                    want=min((j-i for i in range(length) for j in range(i+1,length+1) if sum(values[i:j])>=target),default=0)
                    self.assertEqual(min_subarray_len(values,target),want)
                    self.assertEqual(values,list(items))
        for values,target in [([0],1),([-1],1),([1],0),([True],1),([1],1.5)]:
            with self.assertRaises(ValueError):min_subarray_len(values,target)
