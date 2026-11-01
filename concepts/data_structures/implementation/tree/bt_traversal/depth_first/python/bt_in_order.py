from concepts.data_structures.implementation.tree.bt_base.python.binary_tree import (
    BinaryNode,
)


def walk(curr, path):
    if curr is None:
        return path

    walk(curr.left, path)
    path.append(curr.value)
    walk(curr.right, path)

    return path


def in_order_search(head):
    return walk(head, [])
