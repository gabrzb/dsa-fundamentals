import unittest

from .solution import productExceptSelf


class SolutionTests(unittest.TestCase):
    def test_product_except_self(self):
        for nums, expected in [
            ([1, 2, 3, 4], [24, 12, 8, 6]),
            ([-1, 1, 0, -3, 3], [0, 0, 9, 0, 0]),
            ([0, 2, 0], [0, 0, 0]),
            ([-2, 3], [3, -2]),
            ([2, 2, 3], [6, 6, 4]),
            ([0, -2, 3], [-6, 0, 0]),
        ]:
            with self.subTest(nums=nums):
                self.assertEqual(productExceptSelf(nums), expected)
