import unittest
from concepts.algorithms.implementation.binary_search_answer.python.solution import minimum_capacity
import itertools
class Tests(unittest.TestCase):
    def test_against_all_order_preserving_partitions(self):
        self.assertEqual(minimum_capacity([],1),0)
        for size in range(1,6):
            for items in itertools.product([1,2,3],repeat=size):
                values=list(items)
                for days in range(1,size+2):
                    best=sum(values)
                    for mask in range(1<<(size-1)):
                        groups=[values[0]]
                        for i in range(1,size):
                            if mask & (1<<(i-1)):groups.append(0)
                            groups[-1]+=values[i]
                        if len(groups)<=days:best=min(best,max(groups))
                    self.assertEqual(minimum_capacity(values,days),best)
                self.assertEqual(values,list(items))
        for weights,days in [([0],1),([-1],1),([1],0),([True],1),([1],0.5)]:
            with self.assertRaises(ValueError):minimum_capacity(weights,days)
