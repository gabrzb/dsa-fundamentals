class DoublyLinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None


class LRU:
    def __init__(self, capacity=10):
        if not isinstance(capacity, int) or isinstance(capacity, bool) or capacity <= 0:
            raise ValueError("Capacity must be a positive integer")
        self.length = 0
        self.capacity = capacity
        self.head = None
        self.tail = None
        self._lookup = {}
        self._reverse_lookup = {}

    def update(self, key, value):
        node = self._lookup.get(key)

        if node is None:
            node = DoublyLinkedListNode(value)
            self.length += 1
            self._prepend(node)
            self._trim_cache()

            self._lookup[key] = node
            self._reverse_lookup[node] = key
        else:
            self._detach(node)
            self._prepend(node)
            node.value = value

    def get(self, key):

        node = self._lookup.get(key)

        if node is None:
            return None

        self._detach(node)
        self._prepend(node)

        return node.value

    def _detach(self, node):
        if node.prev is not None:
            node.prev.next = node.next

        if node.next is not None:
            node.next.prev = node.prev

        if self.head is node:
            self.head = self.head.next

        if self.tail is node:
            self.tail = self.tail.prev

        node.next = None
        node.prev = None

    def _prepend(self, node):
        if self.head is None:
            self.head = self.tail = node
            return

        node.next = self.head
        self.head.prev = node
        self.head = node

    def _trim_cache(self):
        if self.length <= self.capacity:
            return

        tail = self.tail
        self._detach(tail)

        key = self._reverse_lookup[tail]
        del self._lookup[key]
        del self._reverse_lookup[tail]
        self.length -= 1
