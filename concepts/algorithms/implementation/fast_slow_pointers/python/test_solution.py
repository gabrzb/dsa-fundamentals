import unittest
from concepts.algorithms.implementation.fast_slow_pointers.python.solution import Node,cycle_entry
class Tests(unittest.TestCase):
    def test_every_tail_attachment(self):
        self.assertIsNone(cycle_entry(None))
        for size in range(1,20):
            for entry in range(-1,size):
                nodes=[Node(1) for _ in range(size)]
                for i in range(size-1):nodes[i].next=nodes[i+1]
                nodes[-1].next=None if entry<0 else nodes[entry]
                links=[node.next for node in nodes]
                self.assertIs(cycle_entry(nodes[0]),None if entry<0 else nodes[entry])
                self.assertEqual([node.next for node in nodes],links)
