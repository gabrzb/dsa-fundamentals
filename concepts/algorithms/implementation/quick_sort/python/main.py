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
