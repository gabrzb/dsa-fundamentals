class RingBuffer:
    def __init__(self, capacity):
        if not isinstance(capacity, int) or isinstance(capacity, bool) or capacity <= 0:
            raise ValueError("Capacity must be a positive integer.")

        self.length = 0
        self.capacity = capacity
        self._values = [None] * capacity
        self._head = 0
        self._tail = 0

    def enqueue(self, item):
        if self.length == self.capacity:
            raise Exception("Ring buffer is full.")

        self._values[self._tail] = item
        self._tail = (self._tail + 1) % self.capacity
        self.length += 1

    def dequeue(self):
        if self.length == 0:
            return None

        item = self._values[self._head]
        self._values[self._head] = None
        self._head = (self._head + 1) % self.capacity
        self.length -= 1

        return item

    def peek(self):
        if self.length == 0:
            return None

        return self._values[self._head]

    def get(self, index):
        if (
            not isinstance(index, int)
            or isinstance(index, bool)
            or index < 0
            or index >= self.length
        ):
            return None

        return self._values[(self._head + index) % self.capacity]


def test_ring_buffer():
    ring_buffer = RingBuffer(3)

    ring_buffer.enqueue(10)
    ring_buffer.enqueue(20)
    ring_buffer.enqueue(30)

    print(f"Peek: {ring_buffer.peek()} | Expected: 10")
    print(f"Length: {ring_buffer.length} | Expected: 3")
    print(f"Value at index 2: {ring_buffer.get(2)} | Expected: 30")

    print(f"Dequeue: {ring_buffer.dequeue()} | Expected: 10")
    ring_buffer.enqueue(40)

    for expected in [20, 30, 40]:
        print(f"Dequeue: {ring_buffer.dequeue()} | Expected: {expected}")

    print(f"Dequeue empty: {ring_buffer.dequeue()} | Expected: None")
    print(f"Length: {ring_buffer.length} | Expected: 0")


test_ring_buffer()