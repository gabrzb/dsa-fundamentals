package main

import "fmt"

type node[T any] struct {
	value T
	next  *node[T]
}

type Queue[T any] struct {
	Length int
	head   *node[T]
	tail   *node[T]
}

func NewQueue[T any]() *Queue[T] {
	return &Queue[T]{}
}

func (q *Queue[T]) Enqueue(item T) {
	newNode := &node[T]{value: item}

	if q.tail == nil {
		q.head = newNode
		q.tail = newNode
		q.Length++
		return
	}

	q.tail.next = newNode
	q.tail = newNode
	q.Length++
}

func (q *Queue[T]) Dequeue() (T, bool) {
	if q.head == nil {
		var zero T
		return zero, false
	}

	head := q.head
	q.head = head.next
	head.next = nil
	q.Length--

	if q.head == nil {
		q.tail = nil
	}

	return head.value, true
}

func (q *Queue[T]) Peek() (T, bool) {
	if q.head == nil {
		var zero T
		return zero, false
	}

	return q.head.value, true
}

func testQueue() {
	queue := NewQueue[int]()

	queue.Enqueue(10)
	queue.Enqueue(20)
	queue.Enqueue(30)

	peeked, peekOK := queue.Peek()
	fmt.Printf("Peek: %d, %t | Expected: 10, true\n", peeked, peekOK)
	fmt.Printf("Length: %d | Expected: 3\n", queue.Length)

	for _, expected := range []int{10, 20, 30} {
		value, ok := queue.Dequeue()
		fmt.Printf("Dequeue: %d, %t | Expected: %d, true\n", value, ok, expected)
	}

	_, dequeueOK := queue.Dequeue()
	fmt.Printf("Dequeue empty: %t | Expected: false\n", dequeueOK)
	fmt.Printf("Length: %d | Expected: 0\n", queue.Length)
}

func main() {
	testQueue()
}
