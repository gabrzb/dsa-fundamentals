def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result

def mergeSort(arr):
    if len(arr) <= 1:
        return arr

    left = mergeSort(arr[:len(arr)//2])
    right = mergeSort(arr[len(arr)//2:])

    return merge(left, right)

def testMergeSort():
    test_cases = [
        ([3, 1, 2, 3, 1], [1, 1, 2, 3, 3]),
        ([-3, 0, 2, -1, 5], [-3, -1, 0, 2, 5]),
        ([64, 34, 25, 12, 22, 11, 90], [11, 12, 22, 25, 34, 64, 90]),
    ]

    for input_arr, expected in test_cases:
        result = mergeSort(input_arr.copy())

        print(
            f"Input: {input_arr}\nResult: {result} | "
            f"Expected: {expected}\n"
        )

testMergeSort()