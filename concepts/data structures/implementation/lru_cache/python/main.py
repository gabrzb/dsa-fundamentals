class DoublyLinkedListNode:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None


class LRU:
    def __init__(self, capacity=10):
        self.length = 0
        self.capacity = capacity
        self.head = None
        self.tail = None
        self._lookup = {}
        self._reverse_lookup = {}

    def update(self, key, value):
        node = self._lookup.get(key)

        # does it exist?
        # if it doesn't exist, insert it
        # - check capacity and evict if over
        # if it does exist, update to the front
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
        # check the cache for existence
        node = self._lookup.get(key)

        if node is None:
            return None

        # update the value we found and move it to the front
        self._detach(node)
        self._prepend(node)

        # return out the value found or None if not exist
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


def test_lru():
    cache = LRU(3)

    cache.update("first", 1)
    cache.update("second", 2)
    cache.update("third", 3)

    print(f'Get first: {cache.get("first")} | Expected: 1')

    cache.update("fourth", 4)

    print(f'Get evicted second: {cache.get("second")} | Expected: None')
    print(f'Get third: {cache.get("third")} | Expected: 3')

    cache.update("first", 10)
    cache.update("fifth", 5)

    print(f'Get evicted fourth: {cache.get("fourth")} | Expected: None')
    print(f'Get updated first: {cache.get("first")} | Expected: 10')
    print(f'Get fifth: {cache.get("fifth")} | Expected: 5')
    print(f'Get missing key: {cache.get("missing")} | Expected: None')


test_lru()
