import unittest

from concepts.data_structures.implementation.lru_cache.python.solution import LRU


class SolutionTests(unittest.TestCase):
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

    def test_lru_rejects_invalid_capacity(self):
        for capacity in (0, -1, True, 1.5):
            with self.subTest(capacity=capacity), self.assertRaises(ValueError):
                LRU(capacity)
