import unittest
from concepts.algorithms.implementation.intervals.python.solution import merge_intervals
import itertools
class Tests(unittest.TestCase):
    def test_union_coverage_and_boundaries(self):
        possible=[(-2,-2),(-2,0),(0,1),(1,1),(2,4)]
        for size in range(5):
            for items in itertools.product(possible,repeat=size):
                values=list(items);result=merge_intervals(values)
                self.assertTrue(all(result[i-1][1]<result[i][0] for i in range(1,len(result))))
                cover=lambda intervals:{p for p in range(-4,9) if any(2*a<=p<=2*b for a,b in intervals)}
                self.assertEqual(cover(values),cover(result));self.assertEqual(values,list(items))
        self.assertEqual(merge_intervals([(1,1),(2,2)]),[(1,1),(2,2)])
        self.assertEqual(merge_intervals([(1,2),(2,3)]),[(1,3)])
        with self.assertRaises(ValueError):merge_intervals([(2,1)])
