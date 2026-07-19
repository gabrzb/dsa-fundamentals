class Node:
    def __init__(self, value, next_node=None):
        self.value = value
        self.next = next_node


class Queue:
    def __init__(self):
        self.length = 0
        self._head = None
        self._tail = None

    def enqueue(self, item):
        node = Node(item)
        self.length += 1

        if self._tail is None:
            self._head = self._tail = node
            return

        self._tail.next = node
        self._tail = node

    def dequeue(self):
        if self._head is None:
            return None

        self.length -= 1

        head = self._head
        self._head = head.next
        head.next = None

        if self._head is None:
            self._tail = None

        return head.value

    def peek(self):
        return self._head.value if self._head is not None else None


def test_queue():
    queue = Queue()

    queue.enqueue(10)
    queue.enqueue(20)
    queue.enqueue(30)

    print(f"Peek: {queue.peek()} | Expected: 10")
    print(f"Length: {queue.length} | Expected: 3")

    for expected in [10, 20, 30]:
        print(f"Dequeue: {queue.dequeue()} | Expected: {expected}")

    print(f"Dequeue empty: {queue.dequeue()} | Expected: None")
    print(f"Length: {queue.length} | Expected: 0")


if __name__ == "__main__":
    test_queue()
