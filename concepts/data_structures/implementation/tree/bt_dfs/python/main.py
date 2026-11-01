from bt_base.python.binary_tree import BinaryNode

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