def bubbleSort(arr):
    n = len(arr)
    
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

def testBubbleSort(arr):
    print("Original array:", arr)
    sorted_arr = bubbleSort(arr)
    print("Sorted array:", sorted_arr)

arr = [64, 34, 25, 12, 22, 11, 90]
testBubbleSort(arr)