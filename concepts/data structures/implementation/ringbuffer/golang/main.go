package main

import "fmt"

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

func testRingBuffer() {
	ringBuffer := NewRingBuffer[int](3)

	ringBuffer.Enqueue(10)
	ringBuffer.Enqueue(20)
	ringBuffer.Enqueue(30)

	peeked, peekOK := ringBuffer.Peek()
	fmt.Printf("Peek: %d, %t | Expected: 10, true\n", peeked, peekOK)
	fmt.Printf("Length: %d | Expected: 3\n", ringBuffer.Length)

	value, getOK := ringBuffer.Get(2)
	fmt.Printf("Value at index 2: %d, %t | Expected: 30, true\n", value, getOK)

	value, dequeueOK := ringBuffer.Dequeue()
	fmt.Printf("Dequeue: %d, %t | Expected: 10, true\n", value, dequeueOK)
	ringBuffer.Enqueue(40)

	for _, expected := range []int{20, 30, 40} {
		value, ok := ringBuffer.Dequeue()
		fmt.Printf("Dequeue: %d, %t | Expected: %d, true\n", value, ok, expected)
	}

	_, dequeueOK = ringBuffer.Dequeue()
	fmt.Printf("Dequeue empty: %t | Expected: false\n", dequeueOK)
	fmt.Printf("Length: %d | Expected: 0\n", ringBuffer.Length)
}

func main() {
	testRingBuffer()
}
