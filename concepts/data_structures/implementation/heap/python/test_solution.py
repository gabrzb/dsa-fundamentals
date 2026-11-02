import unittest

from concepts.data_structures.implementation.heap.python.solution import Heap


class SolutionTests(unittest.TestCase):
    def test_heap_orders_duplicates_and_can_be_reused(self):
        heap = Heap()
        values = [5, -1, 3, 3, 0, 10, 2]
        for value in values:
            heap.insert(value)
        self.assertEqual(
            [heap.delete() for _ in values], [(value, True) for value in sorted(values)]
        )
        self.assertEqual(heap.delete(), (0, False))
        heap.insert(4)
        self.assertEqual(heap.delete(), (4, True))
