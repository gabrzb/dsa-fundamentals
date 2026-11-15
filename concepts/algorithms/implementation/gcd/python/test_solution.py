import unittest
from concepts.algorithms.implementation.gcd.python.solution import gcd
class Tests(unittest.TestCase):
    def test_against_divisor_enumeration(self):
        for a in range(50):
            for b in range(50):
                want=max((d for d in range(1,min(a,b)+1) if a%d==0 and b%d==0),default=max(a,b))
                self.assertEqual(gcd(a,b),want)
        self.assertEqual(gcd(1071,462),21)
        for a,b in [(-1,2),(1,True),(1,0.5)]:
            with self.assertRaises(ValueError):gcd(a,b)
