from concepts.data_structures.implementation.tree.bt_base.python.binary_tree import (
    BinaryNode,
)


def search(curr, needle):
    if curr is None:
        return False

    if curr.value == needle:
        return True

    if curr.value < needle:
        return search(curr.right, needle)

    return search(curr.left, needle)


def dfs(head, needle):
    return search(head, needle)
