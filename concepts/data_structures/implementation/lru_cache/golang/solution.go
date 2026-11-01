package solution

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
	if capacity <= 0 {
		panic("capacity must be a positive integer")
	}
	return &LRU[K, V]{
		capacity:      capacity,
		lookup:        make(map[K]*DoublyLinkedListNode[V]),
		reverseLookup: make(map[*DoublyLinkedListNode[V]]K),
	}
}

func (lru *LRU[K, V]) Update(key K, value V) {
	node, exists := lru.lookup[key]

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

	node, exists := lru.lookup[key]

	if !exists {
		var zero V
		return zero, false
	}

	lru.detach(node)
	lru.prepend(node)

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
