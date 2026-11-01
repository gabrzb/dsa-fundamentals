package solution

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
