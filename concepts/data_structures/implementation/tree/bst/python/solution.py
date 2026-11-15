from concepts.data_structures.implementation.tree.bt_base.python.binary_tree import BinaryNode


def insert(root: BinaryNode | None, value: int) -> BinaryNode:
    if root is None:
        return BinaryNode(value)
    if value < root.value:
        root.left = insert(root.left, value)
    elif value > root.value:
        root.right = insert(root.right, value)
    return root


def remove(root: BinaryNode | None, value: int) -> BinaryNode | None:
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
    return root
