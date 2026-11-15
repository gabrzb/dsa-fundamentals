from concepts.data_structures.implementation.deque.python.solution import Deque


def window_maxima(values: list[int], size: int) -> list[int]:
    if not isinstance(size, int) or isinstance(size, bool) or not 1 <= size <= len(values):
        raise ValueError("window size must be from one through the input length")
    queue, result = Deque(), []
    for index, value in enumerate(values):
        while len(queue) and queue.front() <= index - size:
            queue.pop_front()
        while len(queue) and values[queue.back()] <= value:
            queue.pop_back()
        queue.push_back(index)
        if index >= size - 1:
            result.append(values[queue.front()])
    return result
