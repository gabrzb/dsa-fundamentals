class StackNode:
    def __init__(self, value, prev=None):
        self.value = value
        self.prev = prev


class Stack:
    def __init__(self):
        self._head = None
        self.length = 0

    def push(self, item):
        self._head = StackNode(item, self._head)
        self.length += 1

    def pop(self):
        if self._head is None:
            return None

        value = self._head.value
        self._head = self._head.prev
        self.length -= 1

        return value

    def peek(self):
        if self._head is None:
            return None

        return self._head.value

    def print_stack(self):
        current = self._head
        values = []

        while current is not None:
            values.append(current.value)
            current = current.prev

        print(" -> ".join(str(value) for value in reversed(values)))


def test_stack():
    stack = Stack()

    print("Initial values:")
    print(f"Length: {stack.length}")
    print(f"Head: {stack.peek()}")

    stack.push(1)
    stack.push(2)
    stack.push(3)

    print("After pushing 1, 2, 3:")
    stack.print_stack()
    print(f"Length: {stack.length}")
    print(f"Head: {stack.peek()}")

    print("Popping values:")
    print(stack.pop())
    print(stack.pop())
    print(stack.pop())

    print("After popping all values:")
    stack.print_stack()
    print(f"Length: {stack.length}")
    print(f"Head: {stack.peek()}")


test_stack()