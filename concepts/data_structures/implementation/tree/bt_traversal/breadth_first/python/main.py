from concepts.data_structures.implementation.tree.bt_base.python.binary_tree import BinaryNode

def bfs(head, needle):
    queue = [head]

    while queue:
        curr = queue.pop(0)

        if curr is None:
            continue


        if curr.value == needle:
            return True

        queue.append(curr.left)
        queue.append(curr.right)

    return False
