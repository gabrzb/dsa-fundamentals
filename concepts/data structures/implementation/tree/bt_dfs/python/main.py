from bt_base.python.binary_tree import BinaryNode

def search(node, needle):
    if node is None:
        return False

    if node.value == needle:
        return True

    if node.value < needle:
        return search(node.right, needle)

    return search(node.left, needle)

def dfs(head, needle):
    return search(head, needle)

def test_dfs():
    tree = BinaryNode(
        10,
        BinaryNode(5, BinaryNode(2), BinaryNode(7)),
        BinaryNode(15, BinaryNode(12), BinaryNode(20)),
    )

    print(f"Searching for 7: {dfs(tree, 7)} | Expected: True")
    print(f"Searching for 12: {dfs(tree, 12)} | Expected: True")
    print(f"Searching for 8: {dfs(tree, 8)} | Expected: False")

if __name__ == "__main__":
    test_dfs()