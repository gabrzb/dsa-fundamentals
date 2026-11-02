import unittest

from concepts.data_structures.implementation.linked_list.doubly.python.solution import (
    DoublyLinkedList,
)


class SolutionTests(unittest.TestCase):
    def test_linked_lists_remove_head_middle_and_tail(self):
        with self.subTest(list_type=DoublyLinkedList.__name__):
            linked = DoublyLinkedList()
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

    def test_doubly_linked_list_positions_and_links(self):
        linked = DoublyLinkedList()
        linked.insert_in_specific_position(1, 0)
        linked.insert_in_specific_position(3, 1)
        linked.insert_in_specific_position(2, 1)
        self.assertIs(linked.head.next.previous, linked.head)
        self.assertIs(linked.tail.previous.next, linked.tail)
        linked.delete(3)
        self.assertIsNone(linked.tail.next)
        with self.assertRaises(ValueError):
            linked.insert_in_specific_position(4, 5)
