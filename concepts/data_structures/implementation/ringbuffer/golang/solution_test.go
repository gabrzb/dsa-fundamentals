package solution

import (
	"testing"
)

func TestWraparoundAndEmpty(t *testing.T) {
	ring := NewRingBuffer[int](2)
	ring.Enqueue(1)
	ring.Enqueue(2)
	if value, ok := ring.Dequeue(); !ok || value != 1 {
		t.Fatal("incorrect first value")
	}
	ring.Enqueue(3)
	if value, ok := ring.Get(1); !ok || value != 3 {
		t.Fatal("index did not wrap")
	}
	if _, ok := ring.Get(-1); ok {
		t.Fatal("negative index accepted")
	}
	for _, expected := range []int{2, 3} {
		if value, ok := ring.Dequeue(); !ok || value != expected {
			t.Fatalf("dequeue = %d, %t; want %d", value, ok, expected)
		}
	}
	if _, ok := ring.Dequeue(); ok {
		t.Fatal("empty ring reported a value")
	}
}
func TestOverflow(t *testing.T) {
	defer func() {
		if recover() == nil {
			t.Fatal("expected overflow panic")
		}
	}()
	ring := NewRingBuffer[int](1)
	ring.Enqueue(1)
	ring.Enqueue(2)
}
