import unittest

from concepts.data_structures.implementation.linked_list.singly.python.solution import (
    SinglyLinkedList,
)


class SolutionTests(unittest.TestCase):
    def test_linked_lists_remove_head_middle_and_tail(self):
        with self.subTest(list_type=SinglyLinkedList.__name__):
            linked = SinglyLinkedList()
            linked.insert_in_front(2)
            linked.insert_in_front(1)
            linked.insert_in_sorted_list(3)
            self.assertEqual(linked.search(2).data, 2)
            for value in [2, 1, 3]:
                linked.delete(value)
                self.assertIsNone(linked.search(value))
            self.assertIsNone(linked.head)
            with self.assertRaises(ValueError):
                linked.delete(99)
