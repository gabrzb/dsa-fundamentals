import unittest

from concepts.data_structures.implementation.stack.python.solution import Stack


class SolutionTests(unittest.TestCase):
    def test_stack_lifo(self):
        stack = Stack()
        stack.push(1)
        stack.push(2)
        self.assertEqual(stack.peek(), 2)
        self.assertEqual([stack.pop(), stack.pop()], [2, 1])
        self.assertIsNone(stack.pop())
