package solution

import (
	"slices"
	"testing"
)

func TestOrderedExtractionAndReuse(t *testing.T) {
	heap := newHeap()
	values := []int{5, -1, 3, 3, 0, 10, 2}
	for _, value := range values {
		heap.insert(value)
	}
	slices.Sort(values)
	for _, expected := range values {
		if value, ok := heap.delete(); !ok || value != expected {
			t.Fatalf("delete = %d, %t; want %d, true", value, ok, expected)
		}
	}
	if _, ok := heap.delete(); ok {
		t.Fatal("empty heap reported a value")
	}
	heap.insert(4)
	if value, ok := heap.delete(); !ok || value != 4 {
		t.Fatal("heap cannot be reused")
	}
}
