import unittest

from concepts.data_structures.implementation.arrays.dynamic_array.python.main import DynamicArray
from concepts.data_structures.implementation.arrays.static_array.python.main import StaticArray
from concepts.data_structures.implementation.hashmaps.python.main import HashMap
from concepts.data_structures.implementation.heap.python.main import Heap
from concepts.data_structures.implementation.linked_list.doubly.python.main import DoublyLinkedList
from concepts.data_structures.implementation.linked_list.singly.python.main import SinglyLinkedList
from concepts.data_structures.implementation.lru_cache.python.main import LRU
from concepts.data_structures.implementation.queues.python.main import Queue
from concepts.data_structures.implementation.ringbuffer.python.main import RingBuffer
from concepts.data_structures.implementation.stack.python.main import Stack


class StructureTests(unittest.TestCase):
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

    def test_hash_collisions_updates_and_removals(self):
        table = HashMap(1)
        for key, value in [("a", 1), ("b", 2), ("c", 3)]:
            table.put(key, value)
        table.put("b", 20)
        table.remove("a")
        table.remove("c")
        table.remove("missing")
        self.assertEqual(table.get("b"), 20)
        self.assertIsNone(table.get("a"))
        self.assertIsNone(table.get("c"))
        with self.assertRaises(ValueError):
            HashMap(0)

    def test_heap_orders_duplicates_and_can_be_reused(self):
        heap = Heap()
        values = [5, -1, 3, 3, 0, 10, 2]
        for value in values:
            heap.insert(value)
        self.assertEqual([heap.delete() for _ in values], [(value, True) for value in sorted(values)])
        self.assertEqual(heap.delete(), (0, False))
        heap.insert(4)
        self.assertEqual(heap.delete(), (4, True))

    def test_queue_fifo_and_reuse(self):
        queue = Queue()
        self.assertIsNone(queue.dequeue())
        queue.enqueue(1)
        queue.enqueue(2)
        self.assertEqual(queue.peek(), 1)
        self.assertEqual([queue.dequeue(), queue.dequeue()], [1, 2])
        queue.enqueue(3)
        self.assertEqual(queue.dequeue(), 3)
        self.assertIsNone(queue.peek())

    def test_stack_lifo(self):
        stack = Stack()
        stack.push(1)
        stack.push(2)
        self.assertEqual(stack.peek(), 2)
        self.assertEqual([stack.pop(), stack.pop()], [2, 1])
        self.assertIsNone(stack.pop())

    def test_ring_buffer_wraparound_and_overflow(self):
        ring = RingBuffer(2)
        ring.enqueue(1)
        ring.enqueue(2)
        with self.assertRaises(Exception):
            ring.enqueue(3)
        self.assertEqual(ring.dequeue(), 1)
        ring.enqueue(3)
        self.assertEqual(ring.get(1), 3)
        self.assertIsNone(ring.get(-1))
        self.assertEqual([ring.dequeue(), ring.dequeue()], [2, 3])
        self.assertIsNone(ring.dequeue())
        with self.assertRaises(ValueError):
            RingBuffer(0)

    def test_lru_eviction_read_refresh_and_update(self):
        cache = LRU(2)
        cache.update("a", 1)
        cache.update("b", 2)
        self.assertEqual(cache.get("a"), 1)
        cache.update("c", 3)
        self.assertIsNone(cache.get("b"))
        cache.update("a", 10)
        cache.update("d", 4)
        self.assertIsNone(cache.get("c"))
        self.assertEqual(cache.get("a"), 10)
        self.assertEqual(cache.length, 2)

    def test_linked_lists_remove_head_middle_and_tail(self):
        for list_type in (SinglyLinkedList, DoublyLinkedList):
            with self.subTest(list_type=list_type.__name__):
                linked = list_type()
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
