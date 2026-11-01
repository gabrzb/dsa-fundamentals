package solution

import (
	"testing"
)

func TestFIFOAndReuse(t *testing.T) {
	queue := NewQueue[int]()
	if _, ok := queue.Dequeue(); ok {
		t.Fatal("empty queue reported a value")
	}
	queue.Enqueue(1)
	queue.Enqueue(2)
	if value, ok := queue.Peek(); !ok || value != 1 {
		t.Fatal("peek changed FIFO order")
	}
	for _, expected := range []int{1, 2} {
		if value, ok := queue.Dequeue(); !ok || value != expected {
			t.Fatalf("dequeue = %d, %t; want %d, true", value, ok, expected)
		}
	}
	queue.Enqueue(3)
	if value, ok := queue.Dequeue(); !ok || value != 3 {
		t.Fatal("queue cannot be reused")
	}
}
