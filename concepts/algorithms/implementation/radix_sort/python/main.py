def checkNegative(arr):
    for num in arr:
        if num < 0:
            return True

    return False


def getMax(arr):
    mx = arr[0]

    for i in range(1, len(arr)):
        if arr[i] > mx:
            mx = arr[i]

    return mx


def countingSort(arr, exp):
    output = [0] * len(arr)
    count = [0] * 10

    for num in arr:
        digit = (num // exp) % 10
        count[digit] += 1

    for i in range(1, len(count)):
        count[i] += count[i - 1]

    for i in range(len(arr) - 1, -1, -1):
        digit = (arr[i] // exp) % 10
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1

    return output


def radixSort(arr):
    max_num = getMax(arr)
    sorted_arr = arr
    exp = 1

    while max_num // exp > 0:
        sorted_arr = countingSort(sorted_arr, exp)
        exp *= 10

    return sorted_arr


def testRadixSort():
    test_cases = [
        ([-3, 0, 2, -1, 5], None), # Negative numbers are not supported in basic radix sort
        ([3, 1, 2, 3, 1], [1, 1, 2, 3, 3]),
        ([64, 34, 25, 12, 22, 11, 90], [11, 12, 22, 25, 34, 64, 90]),
    ]

    for input_arr, expected in test_cases:
        input_copy = input_arr.copy()

        if checkNegative(input_copy):
            print(
                f"Input: {input_arr}\nResult: Error | "
                f"Expected: {expected}\n"
            )
            continue

        result = radixSort(input_copy)

        print(
            f"Input: {input_arr}\nResult: {result} | "
            f"Expected: {expected}\n"
        )


testRadixSort()
