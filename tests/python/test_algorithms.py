import importlib
import unittest

from concepts.algorithms.implementation.binary_search.python.solution import (
    binarySearch,
)
from concepts.algorithms.implementation.linear_search.python.solution import (
    linearSearch,
)
from concepts.algorithms.implementation.recursion.python.solution import solve


class AlgorithmTests(unittest.TestCase):
    def test_sorting(self):
        algorithms = {
            "bubble_sort": "bubbleSort",
            "insertion_sort": "insertionSort",
            "selection_sort": "selectionSort",
            "merge_sort": "mergeSort",
            "quick_sort": "quick_sort",
            "heap_sort": "heapSort",
            "radix_sort": "radixSort",
        }
        for topic, name in algorithms.items():
            module = importlib.import_module(
                f"concepts.algorithms.implementation.{topic}.python.solution"
            )
            cases = [[], [1], [3, 1, 2, 1], [0, 10, 2, 100], [1, 2, 3], [3, 2, 1]]
            if topic != "radix_sort":
                cases.append([-3, 0, 2, -1])
            for values in cases:
                with self.subTest(algorithm=topic, values=values):
                    self.assertEqual(
                        getattr(module, name)(values.copy()), sorted(values)
                    )

    def test_radix_sort_rejects_negative_integers(self):
        from concepts.algorithms.implementation.radix_sort.python.solution import (
            radixSort,
        )

        with self.assertRaises(ValueError):
            radixSort([-1, 2])

    def test_search(self):
        for search in (linearSearch, binarySearch):
            for values, target, expected in [
                ([], 1, -1),
                ([1], 1, 0),
                ([1, 3, 5], 1, 0),
                ([1, 3, 5], 5, 2),
                ([1, 3, 5], 2, -1),
            ]:
                with self.subTest(search=search.__name__, values=values, target=target):
                    self.assertEqual(search(values, target), expected)

    def test_maze_path_and_unreachable_exit(self):
        self.assertEqual(solve(["   "], "x", (0, 0), (2, 0)), [(0, 0), (1, 0), (2, 0)])
        self.assertEqual(solve([" x "], "x", (0, 0), (2, 0)), [])
        self.assertEqual(solve([" "], "x", (0, 0), (0, 0)), [(0, 0)])
