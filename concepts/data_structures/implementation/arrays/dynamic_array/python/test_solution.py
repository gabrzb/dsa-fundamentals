import unittest

from concepts.data_structures.implementation.arrays.dynamic_array.python.solution import (
    DynamicArray,
)


class SolutionTests(unittest.TestCase):
    def test_dynamic_array_grows_shrinks_and_reuses_storage(self):
        array = DynamicArray()
        for value in range(20):
            array.insert(value)
        for value in range(20):
            self.assertEqual(array.find(value), 0)
            array.delete(value)
        self.assertEqual(array.find(19), -1)
        array.insert(42)
        self.assertEqual(array.find(42), 0)
        with self.assertRaises(Exception):
            array.delete(99)
