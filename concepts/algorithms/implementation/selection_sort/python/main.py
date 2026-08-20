def selectionSort(arr):
    for i in range(len(arr)):
        min_index = i

        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_index]:
                min_index = j

        if min_index != i:
            arr[i], arr[min_index] = arr[min_index], arr[i]
        
    return arr

def testSelectionSort():
    test_cases = [
        ([3, 1, 2, 3, 1], [1, 1, 2, 3, 3]),
        ([-3, 0, 2, -1, 5], [-3, -1, 0, 2, 5]),
        ([64, 34, 25, 12, 22, 11, 90], [11, 12, 22, 25, 34, 64, 90]),
    ]

    for input_arr, expected in test_cases:
        result = selectionSort(input_arr.copy())

        print(
            f"Input: {input_arr}\nResult: {result} | "
            f"Expected: {expected}\n"
        )

testSelectionSort()