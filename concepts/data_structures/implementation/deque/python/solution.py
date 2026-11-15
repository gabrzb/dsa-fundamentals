class Deque:
    def __init__(self, capacity: int = 4):
        if not isinstance(capacity, int) or isinstance(capacity, bool) or capacity < 1:
            raise ValueError("capacity must be a positive integer")
        self._data = [None] * capacity
        self._head = self._size = 0

    def __len__(self):
        return self._size

    def _grow(self):
        if self._size == len(self._data):
            self._data = [self._data[(self._head + i) % self._size] for i in range(self._size)] + [None] * self._size
            self._head = 0

    def push_front(self, value: int):
        self._grow()
        self._head = (self._head - 1) % len(self._data)
        self._data[self._head] = value
        self._size += 1

    def push_back(self, value: int):
        self._grow()
        self._data[(self._head + self._size) % len(self._data)] = value
        self._size += 1

    def front(self) -> int:
        if not self._size:
            raise IndexError("deque is empty")
        return self._data[self._head]

    def back(self) -> int:
        if not self._size:
            raise IndexError("deque is empty")
        return self._data[(self._head + self._size - 1) % len(self._data)]

    def pop_front(self) -> int:
        value = self.front()
        self._data[self._head] = None
        self._head = (self._head + 1) % len(self._data)
        self._size -= 1
        return value

    def pop_back(self) -> int:
        value = self.back()
        self._data[(self._head + self._size - 1) % len(self._data)] = None
        self._size -= 1
        return value
