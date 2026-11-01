package solution

type RingBuffer[T any] struct {
	Length   int
	Capacity int
	values   []T
	head     int
	tail     int
}

func NewRingBuffer[T any](capacity int) *RingBuffer[T] {
	if capacity <= 0 {
		panic("capacity must be a positive integer")
	}

	return &RingBuffer[T]{
		Capacity: capacity,
		values:   make([]T, capacity),
	}
}

func (r *RingBuffer[T]) Enqueue(item T) {
	if r.Length == r.Capacity {
		panic("ring buffer is full")
	}

	r.values[r.tail] = item
	r.tail = (r.tail + 1) % r.Capacity
	r.Length++
}

func (r *RingBuffer[T]) Dequeue() (T, bool) {
	if r.Length == 0 {
		var zero T
		return zero, false
	}

	item := r.values[r.head]
	var zero T
	r.values[r.head] = zero
	r.head = (r.head + 1) % r.Capacity
	r.Length--

	return item, true
}

func (r *RingBuffer[T]) Peek() (T, bool) {
	if r.Length == 0 {
		var zero T
		return zero, false
	}

	return r.values[r.head], true
}

func (r *RingBuffer[T]) Get(index int) (T, bool) {
	if index < 0 || index >= r.Length {
		var zero T
		return zero, false
	}

	return r.values[(r.head+index)%r.Capacity], true
}
