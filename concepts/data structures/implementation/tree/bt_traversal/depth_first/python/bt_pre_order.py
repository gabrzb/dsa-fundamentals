from bt_base.python.binary_tree import BinaryNode


def walk(curr, path):
    if curr is None:
        return path

    # Recursion
    # Pre
    path.append(curr.value)

    # Recurse
    walk(curr.left, path)
    walk(curr.right, path)

    # Post
    return path


def pre_order_search(head):
    return walk(head, [])


def test_pre_order_search():
    tree = BinaryNode(
        1,
        BinaryNode(2, BinaryNode(4), BinaryNode(5)),
        BinaryNode(3),
    )
    result = pre_order_search(tree)

    print(f"Pre-order: {result} | Expected: [1, 2, 4, 5, 3]")


test_pre_order_search()
