A static array is a data structure that stores elements of the same type in a fixed number of contiguous memory slots.

Each element has an index, usually starting at `0`. The index provides direct access to any position in the array without requiring the preceding elements to be traversed.

Characteristics:

- Its capacity is defined when the array is created.
- It stores elements of the same type.
- Its elements occupy contiguous memory locations.
- Index-based access and updates take **O(1)** time.
- Its capacity does not grow or shrink automatically.
- Adding or removing slots may require creating a new array.

Its main advantage is fast, predictable access. Its main limitation is the lack of flexibility to change the number of available slots.

![General representation of a static array](<images/General Representation.png>)


# Array organization

## Indices and values

Consider a static array with enough capacity for six numbers:

| Index | 0  | 1  | 2  | 3  | 4  | 5  |
| ----: | --: | --: | --: | --: | --: | --: |
| Value | 10 | 20 | 30 | 40 | 50 | 60 |

The index identifies a position, while the value is the data stored at that position.

```text
array[0] → 10
array[2] → 30
array[5] → 60
```

For an array with capacity `n`, the valid indices range from:

```text
0 to n - 1
```

In this example, `n = 6`, so the valid indices range from `0` to `5`. Attempting to access `array[6]` goes beyond the array's bounds.

## Contiguous memory

The elements are stored next to one another in memory. If the array's starting address and the size of each element are known, the address of any element can be calculated directly:

```text
address(array[i]) = initialAddress + i × elementSize
```

This calculation does not depend on the number of elements in the array. Therefore, accessing an element by index takes **O(1)** time.

## Capacity and element count

In a static array, **capacity** is the number of reserved slots and cannot be changed after the array is created.

Some implementations also track a logical size representing the number of occupied slots:

```text
capacity = 6
size = 4

[10, 20, 30, 40, null, null]
```

There are still six physical slots in this case, even though only four are in use. The logical size may change, but the physical capacity remains `6`.

# Main operations

## Index access

An element can be accessed directly through its index:

```text
access(arr, index) {
    if (index < 0 || index >= arr.length) {
        throw "Invalid index"
    }

    return arr[index]
}
```

![Accessing an element in a static array](<images/Access.png>)

Because the array does not need to be traversed, index access takes **O(1)** time.

## Update

An update replaces the value stored at an existing position:

```text
update(arr, index, newValue) {
    if (index < 0 || index >= arr.length) {
        throw "Invalid index"
    }

    arr[index] = newValue
}
```

![Updating an element in a static array](<images/Update.png>)

An update also takes **O(1)** time because the position is accessed directly.

## Traversal and search

Traversal means visiting every element in the array:

```text
traverse(arr) {
    for (i = 0; i < arr.length; i++) {
        visit(arr[i])
    }
}
```

Since all `n` positions are visited, traversal takes **O(n)** time.

When only the desired value is known, the elements may need to be checked one by one:

```text
search(arr, target) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        }
    }

    return -1
}
```

![Searching for an element in a static array](<images/Search.png>)

In the worst case, every element must be examined. A linear search in a static array therefore takes **O(n)** time.

Being static does not automatically make an array fast to search. Access takes **O(1)** time only when the index is already known.


# Insertion

A static array cannot increase its capacity directly. When every slot is occupied, adding another value requires creating a larger array and copying the existing elements:

```text
addElement(arr, value) {
    newArr = createArray(arr.length + 1)

    for (i = 0; i < arr.length; i++) {
        newArr[i] = arr[i]
    }

    newArr[arr.length] = value

    return newArr
}
```

![Adding an element to a static array](<images/Element Addition.png>)

Because the elements must be copied, this operation takes **O(n)** time.

If the array has unused slots and the value is inserted after the occupied portion, it can be stored in **O(1)** time without creating another array. The maximum capacity still remains unchanged.

# Removal

Removing a value does not physically eliminate a slot from the array. There are three common approaches:

- Mark the position as empty.
- Shift the following elements and reduce only the logical size.
- Create a smaller array and copy every element except the one being removed.

To remove a position by creating a new array, allocate a smaller array and copy the remaining elements into it:

```text
removeElement(arr, indexToRemove) {
    if (indexToRemove < 0 || indexToRemove >= arr.length) {
        throw "Invalid index"
    }

    newArr = createArray(arr.length - 1)
    destination = 0

    for (origin = 0; origin < arr.length; origin++) {
        if (origin != indexToRemove) {
            newArr[destination] = arr[origin]
            destination++
        }
    }

    return newArr
}
```

![Removing an element from a static array](<images/Element Removal.png>)

This form of removal takes **O(n)** time because the remaining elements must be copied.


# Operation complexity

| Operation                   | Complexity | Reason                                      |
| --------------------------- | ---------: | ------------------------------------------- |
| Index access                |   **O(1)** | The position's address is calculated directly |
| Update by index             |   **O(1)** | The position is already known               |
| Traversal                   |   **O(n)** | Every position is visited                   |
| Linear search               |   **O(n)** | The entire array may need to be examined    |
| Insertion into a new array  |   **O(n)** | The existing elements must be copied        |
| Removal using a new array   |   **O(n)** | The remaining elements must be copied       |
| Memory usage                |   **O(n)** | Reserved memory grows with the capacity     |


# Advantages and disadvantages

## Advantages

- Fast index-based access.
- Simple and predictable structure.
- Good memory locality because elements are stored close together.
- Low memory overhead.
- Capacity is known from the moment the array is created.

## Disadvantages

- Fixed capacity.
- Memory may be wasted when several slots remain unused.
- The array may run out of space as the amount of data grows.
- Insertions and removals may require shifting or copying elements.
- The required capacity must be known or estimated in advance.


# Static arrays and dynamic arrays

| Characteristic             | Static array                              | Dynamic array                                |
| -------------------------- | ----------------------------------------- | -------------------------------------------- |
| Capacity                   | Defined when the array is created         | Can grow or shrink                           |
| Index access               | **O(1)**                                  | **O(1)**                                     |
| Automatic reallocation     | No                                        | May occur                                    |
| Memory usage               | More predictable                          | May reserve additional capacity              |
| Insertion beyond capacity  | Requires manually creating another array | The data structure expands itself internally |
| Flexibility                | Lower                                     | Higher                                       |

A dynamic array usually uses a static array internally. When its capacity is no longer sufficient, it creates a larger static array, copies the elements, and starts using the new storage.


# When to use a static array

Static arrays are appropriate when:

- The maximum number of elements is known.
- The size will not change during execution.
- Fast index-based access is required.
- Memory usage should be predictable.
- The structure will be read and updated often but will have few insertions or removals.

Common examples include:

- Days of the week.
- Months of the year.
- Grades from a fixed number of assessments.
- Coordinates with a known number of dimensions.
- Matrices with fixed numbers of rows and columns.
- Fixed-size buffers.
