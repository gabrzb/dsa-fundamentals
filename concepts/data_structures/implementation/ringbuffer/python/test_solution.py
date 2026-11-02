import unittest

from concepts.data_structures.implementation.ringbuffer.python.solution import (
    RingBuffer,
)


class SolutionTests(unittest.TestCase):
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
