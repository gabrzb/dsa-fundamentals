import unittest
from concepts.algorithms.implementation.prime_sieve.python.solution import primes_up_to
class Tests(unittest.TestCase):
    def test_against_trial_division(self):
        for limit in range(151):
            want=[n for n in range(2,limit+1) if all(n%d for d in range(2,n))]
            self.assertEqual(primes_up_to(limit),want)
        self.assertEqual((len(primes_up_to(1000)),primes_up_to(1000)[-1]),(168,997))
        for limit in [-1,1.5,True]:
            with self.assertRaises(ValueError):primes_up_to(limit)
