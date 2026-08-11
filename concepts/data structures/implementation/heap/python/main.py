class Heap:
    def __init__(self):
        self.data = []
        self.length = 0

    def insert(self, value):
        self.data.append(value)
        self.heapify_up(self.length)
        self.length += 1

    def delete(self):
        if self.length == 0:
            return 0, False

        out = self.data[0]
        self.length -= 1

        if self.length == 0:
            self.data = []
            return out, True

        self.data[0] = self.data[self.length]
        self.data = self.data[:self.length]
        self.heapify_down(0)

        return out, True

    def heapify_up(self, index):
        if index == 0:
            return

        parent_index = self.parent(index)
        parent_value = self.data[parent_index]
        value = self.data[index]

        if parent_value > value:
            self.data[parent_index], self.data[index] = (
                self.data[index],
                self.data[parent_index],
            )
            self.heapify_up(parent_index)

    def heapify_down(self, index):
        left_index = self.left_child(index)
        if left_index >= self.length:
            return

        smallest_index = left_index
        right_index = self.right_child(index)

        if (
            right_index < self.length
            and self.data[right_index] < self.data[left_index]
        ):
            smallest_index = right_index

        if self.data[index] <= self.data[smallest_index]:
            return

        self.data[index], self.data[smallest_index] = (
            self.data[smallest_index],
            self.data[index],
        )
        self.heapify_down(smallest_index)

    def parent(self, index):
        return (index - 1) // 2

    def left_child(self, index):
        return index * 2 + 1

    def right_child(self, index):
        return index * 2 + 2


def test_min_heap():
    heap = Heap()
    values = [5, 3, 69, 420, 4, 1, 8, 7]

    for value in values:
        heap.insert(value)

    print(f"Length after inserts: {heap.length} | Expected: 8")

    expected_order = [1, 3, 4, 5, 7, 8, 69, 420]
    for expected in expected_order:
        value, succeeded = heap.delete()
        print(
            f"Delete: {value}, succeeded: {succeeded} | "
            f"Expected: {expected}, True"
        )

    print(f"Length after deletes: {heap.length} | Expected: 0")
    _, succeeded = heap.delete()
    print(
        f"Delete from empty heap succeeded: {succeeded} | Expected: False"
    )

test_min_heap()