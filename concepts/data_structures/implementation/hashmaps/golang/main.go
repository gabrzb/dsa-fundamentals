package main

import "fmt"

type HashMapNode struct {
	key   string
	value any
	next  *HashMapNode
}

type HashMap struct {
	size  int
	array []*HashMapNode
}

func NewHashMap(size int) *HashMap {
	if size <= 0 {
		panic("HashMap size must be a positive integer")
	}

	return &HashMap{
		size:  size,
		array: make([]*HashMapNode, size),
	}
}

func (hashMap *HashMap) HashFunction(key string) int {
	var hash int32

	for _, character := range key {
		hash = hash*31 + int32(character)
	}

	index := int64(hash)
	if index < 0 {
		index = -index
	}

	return int(index % int64(hashMap.size))
}

func (hashMap *HashMap) Put(key string, value any) {
	index := hashMap.HashFunction(key)
	newNode := &HashMapNode{key: key, value: value}

	if hashMap.array[index] == nil {
		hashMap.array[index] = newNode
		return
	}

	current := hashMap.array[index]
	for {
		if current.key == key {
			current.value = value
			return
		}

		if current.next == nil {
			current.next = newNode
			return
		}

		current = current.next
	}
}

func (hashMap *HashMap) Get(key string) (any, bool) {
	index := hashMap.HashFunction(key)
	current := hashMap.array[index]

	for current != nil {
		if current.key == key {
			return current.value, true
		}

		current = current.next
	}

	return nil, false
}

func (hashMap *HashMap) Remove(key string) {
	index := hashMap.HashFunction(key)
	current := hashMap.array[index]
	var previous *HashMapNode

	for current != nil {
		if current.key == key {
			if previous == nil {
				hashMap.array[index] = current.next
			} else {
				previous.next = current.next
			}
			return
		}

		previous = current
		current = current.next
	}
}

func testHashMap() {
	hashMap := NewHashMap(1)

	hashMap.Put("name", "Alice")
	hashMap.Put("age", 30)
	hashMap.Put("active", true)

	value, found := hashMap.Get("name")
	fmt.Printf("Get name: %v, %t | Expected: Alice, true\n", value, found)
	value, found = hashMap.Get("age")
	fmt.Printf("Get age: %v, %t | Expected: 30, true\n", value, found)
	value, found = hashMap.Get("active")
	fmt.Printf("Get active: %v, %t | Expected: true, true\n", value, found)

	hashMap.Put("age", 31)
	value, found = hashMap.Get("age")
	fmt.Printf("Get updated age: %v, %t | Expected: 31, true\n", value, found)

	hashMap.Remove("name")
	_, found = hashMap.Get("name")
	fmt.Printf("Get removed name: %t | Expected: false\n", found)

	hashMap.Remove("active")
	_, found = hashMap.Get("active")
	fmt.Printf("Get removed active: %t | Expected: false\n", found)
	value, found = hashMap.Get("age")
	fmt.Printf("Get remaining age: %v, %t | Expected: 31, true\n", value, found)

	hashMap.Remove("missing")
	_, found = hashMap.Get("missing")
	fmt.Printf("Get missing key: %t | Expected: false\n", found)
}

func main() {
	testHashMap()
}
