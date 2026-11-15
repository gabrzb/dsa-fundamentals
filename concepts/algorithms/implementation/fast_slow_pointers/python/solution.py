class Node:
    def __init__(self, value: int, next_node=None):
        self.value = value
        self.next = next_node


def cycle_entry(head: Node | None) -> Node | None:
    slow = fast = head
    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            slow = head
            while slow is not fast:
                slow = slow.next
                fast = fast.next
            return slow
    return None
