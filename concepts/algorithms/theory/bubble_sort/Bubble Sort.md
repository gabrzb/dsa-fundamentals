Bubble Sort is a sorting algorithm that compares adjacent elements. When the element on the left is greater than the element on the right, they swap positions.

At the end of each pass through the array, the largest unsorted element reaches its final position, much like a bubble rising to the surface.

Characteristics:
- Compares adjacent elements;
- Swaps elements when they are out of order;
- May need to make several passes over the array;
- Each pass places at least one element in its final position;
- Sorts the array in place, without creating another array.

Its time complexity is **O(n²)** in the average and worst cases. For an array with `n` elements, this implementation performs `n - 1` passes, making fewer comparisons with each pass.

Its space complexity is **O(1)** because the swaps happen within the original array and do not require another array proportional to the input size.

# Step by Step

## Initial state

To understand how the algorithm works, we will sort the following array:

![Initial state](<images/Initial State.png>)

The indices start at `0`. During each comparison, `i` points to the element on the left, while `i + 1` points to its right-hand neighbor.

The algorithm scans the array from left to right. If `arr[i]` is greater than `arr[i + 1]`, the two elements swap positions.

## Algorithm used

```typescript
function bubbleSort(arr: number[]): number[] {
    for (let pass = 0; pass < arr.length - 1; pass++) {
        for (let i = 0; i < arr.length - 1 - pass; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            }
        }
    }

    return arr;
}
```

The variable `pass` represents the current pass through the array. The variable `i` controls the comparisons between adjacent elements.

The limit of the inner loop is `arr.length - 1 - pass`. After each pass, one element reaches its final position at the end of the array. Therefore, this sorted portion does not need to be compared again.

## 1st pass

During the first pass, the algorithm scans the entire array, comparing each element with its right-hand neighbor.

### 1st comparison

Initially, `i = 0`. The algorithm compares `arr[0]` with `arr[1]`:

```text
arr[i] > arr[i + 1]
arr[0] > arr[1]
5 > 3 → true
```

Because `5` is greater than `3`, the elements swap positions:

![First comparison in the first pass](<images/First Comparison - First Pass.png>)

### 2nd comparison

Now, `i = 1`. The algorithm compares `arr[1]` with `arr[2]`:

```text
5 > 8 → false
```

Because the elements are already in the correct order, no swap is performed:

![Second comparison in the first pass](<images/Second Comparison - First Pass.png>)

### 3rd comparison

With `i = 2`, the algorithm compares the values `8` and `4`:

```text
8 > 4 → true
```

The elements swap positions:

![Third comparison in the first pass](<images/Third Comparison - First Pass.png>)

### 4th comparison

With `i = 3`, the algorithm compares the values `8` and `2`:

```text
8 > 2 → true
```

The elements swap positions:

![Fourth comparison in the first pass](<images/Fourth Comparison - First Pass.png>)

At the end of the first pass, the largest element in the array, `8`, has reached the last position. It is now in its final position and does not need to be compared again.

## 2nd pass

The algorithm makes another pass over the unsorted portion:

```text
[3, 5, 4, 2, 8]
```

### 1st comparison

```text
3 > 5 → false
```

Because the elements are already in the correct order, no swap is performed:

![First comparison in the second pass](<images/First Comparison - Second Pass.png>)

### 2nd comparison

```text
5 > 4 → true
```

The elements swap positions:

![Second comparison in the second pass](<images/Second Comparison - Second Pass.png>)

### 3rd comparison

```text
5 > 2 → true
```

The elements swap positions:

![Third comparison in the second pass](<images/Third Comparison - Second Pass.png>)

At the end of the second pass, the array is:

```text
[3, 4, 2, 5, 8]
```

The value `5` has reached its final position. The last two elements are now sorted.

## 3rd pass

The algorithm scans only the remaining unsorted portion:

```text
[3, 4, 2, 5, 8]
```

### 1st comparison

```text
3 > 4 → false
```

Because the elements are already in the correct order, no swap is performed:

![First comparison in the third pass](<images/First Comparison - Third Pass.png>)

### 2nd comparison

```text
4 > 2 → true
```

The elements swap positions:

![Second comparison in the third pass](<images/Second Comparison - Third Pass.png>)

At the end of the third pass, the array is:

```text
[3, 2, 4, 5, 8]
```

The value `4` has reached its final position.

## 4th pass

Only one comparison remains:

### 1st comparison

```text
3 > 2 → true
```

The elements swap positions:

![First comparison in the fourth pass](<images/First Comparison - Fourth Pass.png>)

The entire array is now sorted.

## Loop termination

After the fourth pass, `pass` is incremented to `4`. Before starting another pass, the outer loop checks its condition:

```text
pass < arr.length - 1
4 < 5 - 1
4 < 4 → false
```

![Loop termination](<images/Loop Termination.png>)

Because the condition is false, the algorithm does not start a fifth pass and exits the loop.

## Final state

The array returned by the algorithm is completely sorted:

![Final state](<images/Final State.png>)

## Execution summary

| Pass | Initial state         | Final state           | Element placed |
| ---: | --------------------- | --------------------- | -------------: |
| 1    | `[5, 3, 8, 4, 2]`     | `[3, 5, 4, 2, 8]`     |            `8` |
| 2    | `[3, 5, 4, 2, 8]`     | `[3, 4, 2, 5, 8]`     |            `5` |
| 3    | `[3, 4, 2, 5, 8]`     | `[3, 2, 4, 5, 8]`     |            `4` |
| 4    | `[3, 2, 4, 5, 8]`     | `[2, 3, 4, 5, 8]`     |            `3` |

The number of comparisons decreases after each pass:

```text
4 + 3 + 2 + 1 = 10 comparisons
```

In general, for an array with `n` elements, the maximum number of comparisons is:

```text
(n - 1) + (n - 2) + ... + 2 + 1
```

This sum grows proportionally to `n²`, which explains Bubble Sort's **O(n²)** time complexity.
