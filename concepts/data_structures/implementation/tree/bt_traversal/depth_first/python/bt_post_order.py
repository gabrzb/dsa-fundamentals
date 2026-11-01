from bt_base.python.binary_tree import BinaryNode


def walk(curr, path):
    if curr is None:
        return path

    # Recursion
    # Pre
    # Recurse
    walk(curr.left, path)
    walk(curr.right, path)

    # Post
    path.append(curr.value)
    return path


def post_order_search(head):
    return walk(head, [])


def test_post_order_search():
    tree = BinaryNode(
        1,
        BinaryNode(2, BinaryNode(4), BinaryNode(5)),
        BinaryNode(3),
    )
    result = post_order_search(tree)

    print(f"Post-order: {result} | Expected: [4, 5, 2, 3, 1]")


test_post_order_search()
