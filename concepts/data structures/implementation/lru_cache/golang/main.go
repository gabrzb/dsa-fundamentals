package main

import "fmt"

type DoublyLinkedListNode[V any] struct {
	value V
	next  *DoublyLinkedListNode[V]
	prev  *DoublyLinkedListNode[V]
}

func createNode[V any](value V) *DoublyLinkedListNode[V] {
	return &DoublyLinkedListNode[V]{value: value}
}

type LRU[K comparable, V any] struct {
	length        int
	capacity      int
	head          *DoublyLinkedListNode[V]
	tail          *DoublyLinkedListNode[V]
	lookup        map[K]*DoublyLinkedListNode[V]
	reverseLookup map[*DoublyLinkedListNode[V]]K
}

func NewLRU[K comparable, V any](capacity int) *LRU[K, V] {
	return &LRU[K, V]{
		capacity:      capacity,
		lookup:        make(map[K]*DoublyLinkedListNode[V]),
		reverseLookup: make(map[*DoublyLinkedListNode[V]]K),
	}
}

func (lru *LRU[K, V]) Update(key K, value V) {
	node, exists := lru.lookup[key]

	// does it exist?
	// if it doesn't exist, insert it
	// - check capacity and evict if over
	// if it does exist, update to the front
	if !exists {
		node = createNode(value)
		lru.length++
		lru.prepend(node)
		lru.trimCache()

		lru.lookup[key] = node
		lru.reverseLookup[node] = key
		return
	}

	lru.detach(node)
	lru.prepend(node)
	node.value = value
}

func (lru *LRU[K, V]) Get(key K) (V, bool) {
	// check the cache for existence
	node, exists := lru.lookup[key]

	if !exists {
		var zero V
		return zero, false
	}

	// update the value we found and move it to the front
	lru.detach(node)
	lru.prepend(node)

	// return out the value found or zero value and false if not exist
	return node.value, true
}

func (lru *LRU[K, V]) detach(node *DoublyLinkedListNode[V]) {
	if node.prev != nil {
		node.prev.next = node.next
	}

	if node.next != nil {
		node.next.prev = node.prev
	}

	if lru.head == node {
		lru.head = lru.head.next
	}

	if lru.tail == node {
		lru.tail = lru.tail.prev
	}

	node.next = nil
	node.prev = nil
}

func (lru *LRU[K, V]) prepend(node *DoublyLinkedListNode[V]) {
	if lru.head == nil {
		lru.head = node
		lru.tail = node
		return
	}

	node.next = lru.head
	lru.head.prev = node
	lru.head = node
}

func (lru *LRU[K, V]) trimCache() {
	if lru.length <= lru.capacity {
		return
	}

	tail := lru.tail
	lru.detach(tail)

	key := lru.reverseLookup[tail]
	delete(lru.lookup, key)
	delete(lru.reverseLookup, tail)
	lru.length--
}

func testLRU() {
	cache := NewLRU[string, int](3)

	cache.Update("first", 1)
	cache.Update("second", 2)
	cache.Update("third", 3)

	value, found := cache.Get("first")
	fmt.Printf("Get first: %d, %t | Expected: 1, true\n", value, found)

	cache.Update("fourth", 4)

	_, found = cache.Get("second")
	fmt.Printf("Get evicted second: %t | Expected: false\n", found)
	value, found = cache.Get("third")
	fmt.Printf("Get third: %d, %t | Expected: 3, true\n", value, found)

	cache.Update("first", 10)
	cache.Update("fifth", 5)

	_, found = cache.Get("fourth")
	fmt.Printf("Get evicted fourth: %t | Expected: false\n", found)
	value, found = cache.Get("first")
	fmt.Printf("Get updated first: %d, %t | Expected: 10, true\n", value, found)
	value, found = cache.Get("fifth")
	fmt.Printf("Get fifth: %d, %t | Expected: 5, true\n", value, found)
	_, found = cache.Get("missing")
	fmt.Printf("Get missing key: %t | Expected: false\n", found)
}

func main() {
	testLRU()
}
