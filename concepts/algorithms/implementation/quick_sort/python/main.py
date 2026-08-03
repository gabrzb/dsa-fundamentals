def qs(arr, low, high):
    if low >= high:
        return

    pivotIdx = partition(arr, low, high)

    qs(arr, low, pivotIdx - 1)
    qs(arr, pivotIdx + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    idx = low - 1

    for i in range(low, high):
        if arr[i] <= pivot:
            idx += 1
            arr[idx], arr[i] = arr[i], arr[idx]

    idx += 1
    arr[high], arr[idx] = arr[idx], pivot

    return idx

def quick_sort(arr):
    qs(arr, 0, len(arr) - 1)
    return arr

def test_quick_sort():
    test_cases = [
        ([], []),
        ([1], [1]),
        ([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]),
        ([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]),
        ([3, 1, 2, 3, 1], [1, 1, 2, 3, 3]),
        ([-3, 0, 2, -1, 5], [-3, -1, 0, 2, 5]),
        ([64, 34, 25, 12, 22, 11, 90], [11, 12, 22, 25, 34, 64, 90]),
    ]

    for input_arr, expected in test_cases:
        result = quick_sort(input_arr.copy())
        passed = result == expected

        print(
            f"Input: {input_arr} | Result: {result} | "
            f"Expected: {expected} | Passed: {passed}"
        )

test_quick_sort()
