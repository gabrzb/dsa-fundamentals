class ListNode:
    def __init__(self, data, next_node: "ListNode | None" = None):
        self.data = data
        self.next: ListNode | None = next_node

    def get_data(self):
        return self.data

    def get_next(self) -> "ListNode | None":
        return self.next

    def has_next(self) -> bool:
        return self.next is not None

    def set_next(self, next_node: "ListNode | None") -> None:
        self.next = next_node


class SinglyLinkedList:
    def __init__(self):
        self.head: ListNode | None = None

    def insert_to_back(self, data):
        current = self.head

        if current is None:
            self.head = ListNode(data)
            return

        while True:
            next_node = current.get_next()

            if next_node is None:
                break

            current = next_node

        current.set_next(ListNode(data))

    def insert_in_front(self, data):
        self.head = ListNode(data, self.head)

    def search(self, data):
        current = self.head

        while current is not None:
            if current.get_data() == data:
                return current

            current = current.get_next()

        return None

    def delete(self, target):
        current = self.head
        previous = None

        while current is not None:
            if current.get_data() == target:
                if previous is None:
                    self.head = current.get_next()
                else:
                    previous.set_next(current.get_next())
                return

            previous = current
            current = current.get_next()

        raise ValueError(f"Node with data {target} not found in the list.")

    def insert_in_sorted_list(self, data):
        current = self.head
        previous = None

        while current is not None:
            if current.get_data() > data:
                new_node = ListNode(data, current)

                if previous is None:
                    self.head = new_node
                else:
                    previous.set_next(new_node)
                return

            previous = current
            current = current.get_next()

        if previous is None:
            self.head = ListNode(data)
        else:
            previous.set_next(ListNode(data))

    def print_list(self):
        current = self.head
        list_string = "head -> "

        while current is not None:
            list_string += f"{current.get_data()} -> "
            current = current.get_next()

        list_string += "tail"
        print(list_string)


def test_singly_linked_list():
    linked_list = SinglyLinkedList()

    linked_list.insert_to_back(1)
    linked_list.insert_to_back(2)
    linked_list.insert_to_back(3)
    linked_list.insert_in_front(0)

    linked_list.print_list()
    linked_list.delete(2)
    linked_list.print_list()

    linked_list.insert_in_sorted_list(2)
    linked_list.print_list()


if __name__ == "__main__":
    test_singly_linked_list()
