import unittest

from concepts.data_structures.implementation.hashmaps.python.solution import HashMap


class SolutionTests(unittest.TestCase):
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
