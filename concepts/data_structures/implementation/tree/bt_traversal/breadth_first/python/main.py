from bt_base.python.binary_tree import BinaryNode


def bfs(head, needle):
    queue = [head]

    while queue:
        curr = queue.pop(0)

        if curr is None:
            continue

        # Search
        if curr.value == needle:
            return True

        queue.append(curr.left)
        queue.append(curr.right)

    return False


def test_bfs():
    tree = BinaryNode(
        10,
        BinaryNode(5, BinaryNode(2), BinaryNode(7)),
        BinaryNode(15),
    )

    print(f"Search for 7: {bfs(tree, 7)} | Expected: True")
    print(f"Search for 20: {bfs(tree, 20)} | Expected: False")


test_bfs()
