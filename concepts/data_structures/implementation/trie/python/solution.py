class _Node:
    def __init__(self):
        self.children = {}
        self.terminal = False


class Trie:
    def __init__(self):
        self._root = _Node()

    def _walk(self, word):
        if any(not "a" <= c <= "z" for c in word):
            raise ValueError("only lowercase English letters are supported")
        node = self._root
        for char in word:
            if char not in node.children:
                return None
            node = node.children[char]
        return node

    def insert(self, word: str) -> bool:
        if any(not "a" <= c <= "z" for c in word):
            raise ValueError("only lowercase English letters are supported")
        node = self._root
        for char in word:
            if char not in node.children:
                node.children[char] = _Node()
            node = node.children[char]
        fresh = not node.terminal
        node.terminal = True
        return fresh

    def contains(self, word: str) -> bool:
        node = self._walk(word)
        return node is not None and node.terminal

    def starts_with(self, prefix: str) -> bool:
        return self._walk(prefix) is not None

    def remove(self, word: str) -> bool:
        node = self._walk(word)
        if node is None or not node.terminal:
            return False
        node.terminal = False
        node, path = self._root, []
        for char in word:
            path.append((node, char))
            node = node.children[char]
        for parent, char in reversed(path):
            child = parent.children[char]
            if child.terminal or child.children:
                break
            del parent.children[char]
        return True
