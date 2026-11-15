class UnionFind:
    def __init__(self, size: int):
        if not isinstance(size, int) or isinstance(size, bool) or size < 0:
            raise ValueError("size must be a nonnegative integer")
        self._parent = list(range(size))
        self._size = [1] * size
        self.components = size

    def find(self, value: int) -> int:
        if not isinstance(value, int) or isinstance(value, bool) or not 0 <= value < len(self._parent):
            raise ValueError("element must be an integer index in the structure")
        root = value
        while self._parent[root] != root:
            root = self._parent[root]
        while value != root:
            parent = self._parent[value]
            self._parent[value] = root
            value = parent
        return root

    def union(self, a: int, b: int) -> bool:
        left, right = self.find(a), self.find(b)
        if left == right:
            return False
        if self._size[left] < self._size[right]:
            left, right = right, left
        self._parent[right] = left
        self._size[left] += self._size[right]
        self.components -= 1
        return True

    def connected(self, a: int, b: int) -> bool:
        return self.find(a) == self.find(b)

    def component_size(self, value: int) -> int:
        return self._size[self.find(value)]
