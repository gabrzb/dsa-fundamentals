from bt_base.python.binary_tree import BinaryNode


def walk(curr, path):
    if curr is None:
        return path

    # Recursion
    # Pre
    # Recurse
    walk(curr.left, path)
    path.append(curr.value)
    walk(curr.right, path)

    # Post
    return path


def in_order_search(head):
    return walk(head, [])


def test_in_order_search():
    tree = BinaryNode(
        1,
        BinaryNode(2, BinaryNode(4), BinaryNode(5)),
        BinaryNode(3),
    )
    result = in_order_search(tree)

    print(f"In-order: {result} | Expected: [4, 2, 5, 1, 3]")


test_in_order_search()
