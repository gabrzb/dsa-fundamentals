def binarySearch(arr, target):
    left = 0
    right = len(arr)

    while left < right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid

    return -1

def testBinarySearch(arr, target):
    result = binarySearch(arr, target)
    if result != -1:
        print(f"Element found at index {result}")
    else:
        print("Element not found in the array")    

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
target = 5
testBinarySearch(arr, target)

arr2 = [10, 20, 30, 40, 50]
target2 = 25
testBinarySearch(arr2, target2)