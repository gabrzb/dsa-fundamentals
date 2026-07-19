def linearSearch(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

def testLinearSearch(arr, target):
    result = linearSearch(arr, target)
    if result != -1:
        print(f"Found at index {result}.")
    else:
        print("Not found")

arr = [5, 3, 8, 6, 2]
testLinearSearch(arr, 6)
arr2 = [1, 4, 7, 9, 10]
testLinearSearch(arr2, 5)