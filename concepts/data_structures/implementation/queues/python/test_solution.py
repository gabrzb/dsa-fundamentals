import unittest

from concepts.data_structures.implementation.queues.python.solution import Queue


class SolutionTests(unittest.TestCase):
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
