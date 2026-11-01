from concepts.data_structures.implementation.tree.bt_base.python.binary_tree import BinaryNode

def walk(curr, path):
    if curr is None:
        return path




    walk(curr.left, path)
    walk(curr.right, path)


    path.append(curr.value)
    return path

def post_order_search(head):
    return walk(head, [])
