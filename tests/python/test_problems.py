import unittest

from problems.contains_duplicate.python.solution import containsDuplicate
from problems.group_anagrams.python.solution import Solution as Anagrams
from problems.int_to_roman.python.solution import int_to_roman
from problems.longest_consecutive_sequence.python.solution import (
    Solution as Consecutive,
)
from problems.minimum_distance.python.solution import MinDistance
from problems.search_insert_position.python.solution import searchInsertPosition
from problems.two_crystal_balls.python.solution import twoCrystalBalls
from problems.two_sum.python.solution import two_sum
from problems.valid_anagram.solution_1.python.solution import isAnagram as count_anagram
from problems.valid_anagram.solution_2.python.solution import isAnagram as map_anagram
from problems.valid_parenthesis.python.solution import isValid


class ProblemTests(unittest.TestCase):
    def test_duplicates(self):
        for values, expected in [
            ([], False),
            ([1], False),
            ([1, 2, 1], True),
            ([0, 0], True),
        ]:
            with self.subTest(values=values):
                self.assertEqual(containsDuplicate(values), expected)

    def test_two_sum(self):
        for values, target, expected in [
            ([2, 7, 11, 15], 9, [0, 1]),
            ([3, 2, 4], 6, [1, 2]),
            ([3, 3], 6, [0, 1]),
            ([-1, 2, 4], 3, [0, 2]),
            ([], 1, []),
            ([3], 6, []),
        ]:
            with self.subTest(values=values, target=target):
                self.assertEqual(two_sum(values, target), expected)

    def test_anagrams(self):
        for check in (count_anagram, map_anagram):
            for left, right, expected in [
                ("anagram", "nagaram", True),
                ("rat", "car", False),
                ("", "", True),
                ("a", "aa", False),
                ("aab", "abb", False),
            ]:
                with self.subTest(check=check.__module__, left=left, right=right):
                    self.assertEqual(check(left, right), expected)

    def test_group_anagrams(self):
        result = Anagrams().groupAnagrams(
            ["eat", "tea", "tan", "ate", "nat", "bat", ""]
        )
        self.assertEqual(
            sorted(sorted(group) for group in result),
            sorted([["ate", "eat", "tea"], ["nat", "tan"], ["bat"], [""]]),
        )
        self.assertEqual(Anagrams().groupAnagrams([]), [])

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

    def test_consecutive_sequence(self):
        for values, expected in [
            ([], 0),
            ([100, 4, 200, 1, 3, 2], 4),
            ([1, 2, 0, 1], 3),
            ([-2, -1, 0], 3),
        ]:
            with self.subTest(values=values):
                self.assertEqual(Consecutive().longestConsecutive(values), expected)

    def test_minimum_distance(self):
        self.assertEqual(MinDistance([1, 2, 3, 2], 2, 2), 1)
        self.assertEqual(MinDistance([1], 1, 0), 0)

    def test_insert_position(self):
        for values, target, expected in [
            ([], 2, 0),
            ([1, 3, 5], 0, 0),
            ([1, 3, 5], 2, 1),
            ([1, 3, 5], 5, 2),
            ([1, 3, 5], 7, 3),
        ]:
            with self.subTest(values=values, target=target):
                self.assertEqual(searchInsertPosition(values, target), expected)

    def test_crystal_balls_at_every_boundary(self):
        for length in range(40):
            for boundary in range(length + 1):
                with self.subTest(length=length, boundary=boundary):
                    values = [index >= boundary for index in range(length)]
                    self.assertEqual(
                        twoCrystalBalls(values), boundary if boundary < length else -1
                    )

    def test_parentheses(self):
        for value, expected in [
            ("", True),
            ("()[]{}", True),
            ("([])", True),
            ("([)]", False),
            ("]", False),
            ("((", False),
        ]:
            with self.subTest(value=value):
                self.assertEqual(isValid(value), expected)
