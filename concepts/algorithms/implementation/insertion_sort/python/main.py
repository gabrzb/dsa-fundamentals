def insertionSort(arr):
    for i in range(1, len(arr)):
        j = i
        while j >= 0 and arr[j-1] > arr[j]:
            arr[j-1], arr[j] = arr[j], arr[j-1]
            j -= 1
    return arr

def testInsertionSort():
    test_cases = [
        ([3, 1, 2, 3, 1], [1, 1, 2, 3, 3]),
        ([-3, 0, 2, -1, 5], [-3, -1, 0, 2, 5]),
        ([64, 34, 25, 12, 22, 11, 90], [11, 12, 22, 25, 34, 64, 90]),
    ]

    for input_arr, expected in test_cases:
        result = insertionSort(input_arr.copy())

        print(
            f"Input: {input_arr}\nResult: {result} | "
            f"Expected: {expected}\n"
        )

testInsertionSort()