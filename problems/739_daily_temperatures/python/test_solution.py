import unittest

from .solution import dailyTemperatures


class SolutionTests(unittest.TestCase):
    def test_official_examples(self):
        for temperatures, expected in [
            ([73, 74, 75, 71, 69, 72, 76, 73], [1, 1, 4, 2, 1, 1, 0, 0]),
            ([30, 40, 50, 60], [1, 1, 1, 0]),
            ([30, 60, 90], [1, 1, 0]),
        ]:
            with self.subTest(temperatures=temperatures):
                self.assertEqual(dailyTemperatures(temperatures), expected)

    def test_multiple_resolutions_equal_temperatures_and_single_day(self):
        for temperatures, expected in [
            ([76, 72, 70, 74], [0, 2, 1, 0]),
            ([71, 71, 73, 73], [2, 1, 0, 0]),
            ([70], [0]),
        ]:
            with self.subTest(temperatures=temperatures):
                self.assertEqual(dailyTemperatures(temperatures), expected)
