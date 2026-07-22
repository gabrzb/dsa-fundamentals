class Node:
    def __init__(self, data, next_node=None, previous_node=None):
        self.data = data
        self.next = next_node
        self.previous = previous_node

    def get_data(self):
        return self.data

    def get_next(self):
        return self.next

    def set_next(self, next_node):
        self.next = next_node

    def get_previous(self):
        return self.previous

    def set_previous(self, previous_node):
        self.previous = previous_node


class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_in_front(self, data):
        new_node = Node(data, next_node=self.head)

        if self.head is None:
            self.tail = new_node
        else:
            self.head.set_previous(new_node)

        self.head = new_node

    def insert_in_back(self, data):
        new_node = Node(data, previous_node=self.tail)

        if self.tail is None:
            self.head = new_node
        else:
            self.tail.set_next(new_node)

        self.tail = new_node

    def search(self, data):
        current = self.head

        while current is not None:
            if current.get_data() == data:
                return current

            current = current.get_next()

        return None

    def delete(self, target):
        node = self.search(target)

        if node is None:
            raise ValueError(f"{target} not found in the list.")

        previous = node.get_previous()
        next_node = node.get_next()

        if previous is None:
            self.head = next_node
        else:
            previous.set_next(next_node)

        if next_node is None:
            self.tail = previous
        else:
            next_node.set_previous(previous)

        node.set_next(None)
        node.set_previous(None)

    def insert_in_specific_position(self, data, position):
        if position < 0:
            raise ValueError(f"Position {position} cannot be negative.")

        if position == 0:
            self.insert_in_front(data)
            return

        current = self.head
        index = 0

        while current is not None and index < position:
            current = current.get_next()
            index += 1

        if index != position:
            raise ValueError(f"Position {position} is out of bounds.")

        if current is None:
            self.insert_in_back(data)
            return

        previous = current.get_previous()
        new_node = Node(data, next_node=current, previous_node=previous)

        if previous is not None:
            previous.set_next(new_node)
        current.set_previous(new_node)

    def insert_in_sorted_list(self, data):
        current = self.head

        while current is not None and current.get_data() <= data:
            current = current.get_next()

        if current is self.head:
            self.insert_in_front(data)
            return

        if current is None:
            self.insert_in_back(data)
            return

        previous = current.get_previous()
        new_node = Node(data, next_node=current, previous_node=previous)

        if previous is not None:
            previous.set_next(new_node)
        current.set_previous(new_node)

    def print_list(self):
        current = self.head
        elements = []

        while current is not None:
            elements.append(str(current.get_data()))
            current = current.get_next()

        print("head <->", " <-> ".join(elements), "<-> tail")


def test_doubly_linked_list():
    doubly_linked_list = DoublyLinkedList()

    doubly_linked_list.insert_in_back(10)
    doubly_linked_list.insert_in_back(20)
    doubly_linked_list.insert_in_back(30)
    doubly_linked_list.insert_in_front(5)
    doubly_linked_list.print_list()

    doubly_linked_list.insert_in_specific_position(15, 2)
    doubly_linked_list.print_list()

    doubly_linked_list.insert_in_sorted_list(25)
    doubly_linked_list.print_list()

    doubly_linked_list.delete(15)
    doubly_linked_list.print_list()
    
test_doubly_linked_list()