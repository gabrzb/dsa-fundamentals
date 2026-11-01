package main

type StaticArray struct {
	values []int
	length int
}

func NewStaticArray(size int) StaticArray {
	return StaticArray{values: make([]int, size)}
}

func (array *StaticArray) Insert(value int) {
	if array.length == len(array.values) {
		panic("array is full")
	}

	newValues := make([]int, len(array.values))

	for index := 0; index < array.length; index++ {
		newValues[index] = array.values[index]
	}

	newValues[array.length] = value
	array.values = newValues
	array.length++
}

func (array *StaticArray) Delete(chosenIndex int) {
	if array.length == 0 {
		panic("array is empty")
	}

	if chosenIndex < 0 || chosenIndex >= array.length {
		panic("invalid index")
	}

	newValues := make([]int, len(array.values))
	newIndex := 0

	for index := 0; index < array.length; index++ {
		if index != chosenIndex {
			newValues[newIndex] = array.values[index]
			newIndex++
		}
	}

	array.values = newValues
	array.length--
}

func (array StaticArray) Find(chosenValue int) int {
	for index := 0; index < array.length; index++ {
		if array.values[index] == chosenValue {
			return index
		}
	}

	return -1
}

func main() {
	array := NewStaticArray(3)

	array.Insert(10)
	array.Insert(20)
	array.Insert(30)

	println("Index of 20:", array.Find(20))

	array.Delete(1)

	for index := 0; index < array.length; index++ {
		println(array.values[index])
	}
}
