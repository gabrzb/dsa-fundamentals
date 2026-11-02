import unittest

from problems.int_to_roman.python.solution import int_to_roman


class SolutionTests(unittest.TestCase):
    def test_roman_numerals(self):
        for number, expected in [
            (1, "I"),
            (4, "IV"),
            (9, "IX"),
            (58, "LVIII"),
            (1994, "MCMXCIV"),
            (3999, "MMMCMXCIX"),
        ]:
            with self.subTest(number=number):
                self.assertEqual(int_to_roman(number), expected)
