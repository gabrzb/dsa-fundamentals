def buildMaxHeap(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

def heapify(arr, heapSize, i):
    left = 2 * i + 1
    right = 2 * i + 2
    largest = i

    if left < heapSize and arr[left] > arr[largest]:
        largest = left

    if right < heapSize and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, heapSize, largest)

def heapSort(arr):
    length = len(arr)
    buildMaxHeap(arr)

    for i in range(length - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)

    return arr
