package main

import "fmt"

type DynamicArray struct {
	size     int
	capacity int
	array    []int
}

func NewDynamicArray() DynamicArray {
	return DynamicArray{
		size:     0,
		capacity: 1,
		array:    make([]int, 1),
	}
}

func (array *DynamicArray) DoubleSize() {
	oldArray := array.array
	array.capacity *= 2
	array.array = make([]int, array.capacity)

	for index := 0; index < array.size; index++ {
		array.array[index] = oldArray[index]
	}
}

func (array *DynamicArray) HalveSize() {
	oldArray := array.array
	array.capacity /= 2
	array.array = make([]int, array.capacity)

	for index := 0; index < array.size; index++ {
		array.array[index] = oldArray[index]
	}
}

func (array *DynamicArray) Insert(value int) {
	if array.size == array.capacity {
		array.DoubleSize()
	}

	array.array[array.size] = value
	array.size++	
}

func (array *DynamicArray) Find(target int) int {
	for i := range array.size {
		if array.array[i] == target {
			return i
		}
	}

	return -1
}

func (array *DynamicArray) Delete(target int) {
	index := array.Find(target)

	if index == -1 {
		panic("value not found")
	}

	for i := index; i < array.size-1; i++ {
		array.array[i] = array.array[i+1]
	}
	
	array.size--

	if array.size <= array.capacity / 4 && array.capacity > 1 {
		array.HalveSize()
	}
}

func main() {
	array := NewDynamicArray()

	array.Insert(10)
	array.Insert(20)
	array.Insert(30)

	fmt.Print("Starting array: ")
	fmt.Println(array.array[:array.size])

	fmt.Printf("Index of 20: %d\n", array.Find(20))
	array.Delete(20)
	fmt.Printf("Index of 20 after deletion: %d\n", array.Find(20))

	array.Insert(40)
	array.Insert(50)

	fmt.Print("Final array: ")
	fmt.Println(array.array[:array.size])
}