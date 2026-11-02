def digit_index(value, exp):
    digit = (abs(value) // exp) % 10
    return 9 - digit if value < 0 else 9 + digit


def countingSort(arr, exp):
    output = [0] * len(arr)
    count = [0] * 19

    for num in arr:
        digit = digit_index(num, exp)
        count[digit] += 1

    for i in range(1, len(count)):
        count[i] += count[i - 1]

    for i in range(len(arr) - 1, -1, -1):
        digit = digit_index(arr[i], exp)
        output[count[digit] - 1] = arr[i]
        count[digit] -= 1

    return output


def radixSort(arr):
    if not arr:
        return []
    max_magnitude = max(abs(value) for value in arr)
    sorted_arr = arr
    exp = 1

    while max_magnitude // exp > 0:
        sorted_arr = countingSort(sorted_arr, exp)
        exp *= 10

    return sorted_arr
