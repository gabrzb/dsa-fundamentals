import unittest

from concepts.data_structures.implementation.arrays.static_array.python.solution import (
    StaticArray,
)


class SolutionTests(unittest.TestCase):
    def test_static_array_capacity_and_deletion(self):
        array = StaticArray(2)
        array.insert(10)
        array.insert(20)
        with self.assertRaises(Exception):
            array.insert(30)
        array.delete(0)
        self.assertEqual(array.find(20), 0)
        self.assertEqual(array.find(10), -1)
        array.insert(30)
        self.assertEqual(array.find(30), 1)
        with self.assertRaises(Exception):
            array.delete(-1)
