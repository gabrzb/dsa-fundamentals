package deque

type Deque struct {
	data       []int
	head, size int
}

func New(capacity int) *Deque {
	if capacity < 1 {
		panic("capacity must be positive")
	}
	return &Deque{data: make([]int, capacity)}
}
func (q *Deque) Len() int { return q.size }
func (q *Deque) grow() {
	if q.size != len(q.data) {
		return
	}
	next := make([]int, 2*len(q.data))
	for i := range q.size {
		next[i] = q.data[(q.head+i)%len(q.data)]
	}
	q.data = next
	q.head = 0
}
func (q *Deque) PushFront(value int) {
	q.grow()
	q.head = (q.head + len(q.data) - 1) % len(q.data)
	q.data[q.head] = value
	q.size++
}
func (q *Deque) PushBack(value int) { q.grow(); q.data[(q.head+q.size)%len(q.data)] = value; q.size++ }
func (q *Deque) Front() (int, bool) {
	if q.size == 0 {
		return 0, false
	}
	return q.data[q.head], true
}
func (q *Deque) Back() (int, bool) {
	if q.size == 0 {
		return 0, false
	}
	return q.data[(q.head+q.size-1)%len(q.data)], true
}
func (q *Deque) PopFront() (int, bool) {
	value, ok := q.Front()
	if !ok {
		return 0, false
	}
	q.data[q.head] = 0
	q.head = (q.head + 1) % len(q.data)
	q.size--
	return value, true
}
func (q *Deque) PopBack() (int, bool) {
	value, ok := q.Back()
	if !ok {
		return 0, false
	}
	q.data[(q.head+q.size-1)%len(q.data)] = 0
	q.size--
	return value, true
}
