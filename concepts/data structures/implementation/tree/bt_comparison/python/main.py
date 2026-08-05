from bt_base.python.binary_tree import BinaryNode


def compare(a, b):
    # Structure checks
    if a is None and b is None:
        return True

    if a is None or b is None:
        return False

    # Value check
    if a.value != b.value:
        return False

    return compare(a.left, b.left) and compare(a.right, b.right)


def test_compare():
    tree_a = BinaryNode(1, BinaryNode(2), BinaryNode(3))
    tree_b = BinaryNode(1, BinaryNode(2), BinaryNode(3))
    different_tree = BinaryNode(1, BinaryNode(2))

    print(f"Equal trees: {compare(tree_a, tree_b)} | Expected: True")
    print(
        f"Different trees: {compare(tree_a, different_tree)} | "
        "Expected: False"
    )


test_compare()
