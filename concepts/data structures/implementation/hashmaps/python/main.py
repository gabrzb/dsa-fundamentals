class HashMapNode:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None


class HashMap:
    def __init__(self, size):
        if not isinstance(size, int) or isinstance(size, bool) or size <= 0:
            raise ValueError("HashMap size must be a positive integer")

        self._size = size
        self._array = [None] * size

    def hash_function(self, key):
        hash_value = 0

        for character in key:
            hash_value = hash_value * 31 + ord(character)
            hash_value &= 0xFFFFFFFF

            if hash_value >= 0x80000000:
                hash_value -= 0x100000000

        return abs(hash_value) % self._size

    def put(self, key, value):
        index = self.hash_function(key)
        new_node = HashMapNode(key, value)

        if self._array[index] is None:
            self._array[index] = new_node
            return

        current = self._array[index]

        while current is not None:
            if current.key == key:
                current.value = value
                return

            if current.next is None:
                current.next = new_node
                return

            current = current.next

    def get(self, key):
        index = self.hash_function(key)
        current = self._array[index]

        while current is not None:
            if current.key == key:
                return current.value

            current = current.next

        return None

    def remove(self, key):
        index = self.hash_function(key)
        current = self._array[index]
        previous = None

        while current is not None:
            if current.key == key:
                if previous is None:
                    self._array[index] = current.next
                else:
                    previous.next = current.next
                return

            previous = current
            current = current.next


def test_hash_map():
    hash_map = HashMap(1)

    hash_map.put("name", "Alice")
    hash_map.put("age", 30)
    hash_map.put("active", True)

    print(f'Get name: {hash_map.get("name")} | Expected: Alice')
    print(f'Get age: {hash_map.get("age")} | Expected: 30')
    print(f'Get active: {hash_map.get("active")} | Expected: True')

    hash_map.put("age", 31)
    print(f'Get updated age: {hash_map.get("age")} | Expected: 31')

    hash_map.remove("name")
    print(f'Get removed name: {hash_map.get("name")} | Expected: None')

    hash_map.remove("active")
    print(f'Get removed active: {hash_map.get("active")} | Expected: None')
    print(f'Get remaining age: {hash_map.get("age")} | Expected: 31')

    hash_map.remove("missing")
    print(f'Get missing key: {hash_map.get("missing")} | Expected: None')

test_hash_map()