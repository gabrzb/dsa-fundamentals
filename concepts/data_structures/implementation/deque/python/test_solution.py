import unittest
from concepts.data_structures.implementation.deque.python.solution import Deque
from collections import deque
class Tests(unittest.TestCase):
    def test_against_standard_deque(self):
        actual,model=Deque(1),deque()
        for value in range(40):
            actual.push_front(value);model.appendleft(value)
        state=12345
        for _ in range(2000):
            state=(1664525*state+1013904223)&0xffffffff
            op=(state>>8)%4
            if op==0:actual.push_front(state);model.appendleft(state)
            elif op==1:actual.push_back(state);model.append(state)
            elif model:
                self.assertEqual(actual.pop_front() if op==2 else actual.pop_back(),model.popleft() if op==2 else model.pop())
            self.assertEqual(len(actual),len(model))
            if model:self.assertEqual((actual.front(),actual.back()),(model[0],model[-1]))
        while model:self.assertEqual(actual.pop_front(),model.popleft())
        for operation in [actual.pop_front,actual.pop_back,actual.front,actual.back]:
            with self.assertRaises(IndexError):operation()
        actual.push_back(0);self.assertEqual(actual.pop_back(),0)
        for capacity in [0,-1,True]:
            with self.assertRaises(ValueError):Deque(capacity)
