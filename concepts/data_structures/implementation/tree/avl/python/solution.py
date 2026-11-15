class AVLNode:
    def __init__(self, value: int):
        self.value = value
        self.left = None
        self.right = None
        self.height = 1


def height(node: AVLNode | None) -> int:
    return node.height if node is not None else 0


def _update(node):
    node.height = 1 + max(height(node.left), height(node.right))


def _rotate_right(root):
    pivot = root.left
    root.left = pivot.right
    pivot.right = root
    _update(root)
    _update(pivot)
    return pivot


def _rotate_left(root):
    pivot = root.right
    root.right = pivot.left
    pivot.left = root
    _update(root)
    _update(pivot)
    return pivot


def _rebalance(root):
    _update(root)
    balance = height(root.left) - height(root.right)
    if balance > 1:
        if height(root.left.left) < height(root.left.right):
            root.left = _rotate_left(root.left)
        return _rotate_right(root)
    if balance < -1:
        if height(root.right.right) < height(root.right.left):
            root.right = _rotate_right(root.right)
        return _rotate_left(root)
    return root


def insert(root: AVLNode | None, value: int) -> AVLNode:
    if root is None:
        return AVLNode(value)
    if value < root.value:
        root.left = insert(root.left, value)
    elif value > root.value:
        root.right = insert(root.right, value)
    else:
        return root
    return _rebalance(root)


def remove(root: AVLNode | None, value: int) -> AVLNode | None:
    if root is None:
        return None
    if value < root.value:
        root.left = remove(root.left, value)
    elif value > root.value:
        root.right = remove(root.right, value)
    else:
        if root.left is None:
            return root.right
        if root.right is None:
            return root.left
        successor = root.right
        while successor.left is not None:
            successor = successor.left
        root.value = successor.value
        root.right = remove(root.right, successor.value)
    return _rebalance(root)
