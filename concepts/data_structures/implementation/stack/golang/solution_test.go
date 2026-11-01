package solution

import (
	"testing"
)

func TestLIFO(t *testing.T) {
	stack := NewStack()
	stack.Push(1)
	stack.Push(2)
	if value, err := stack.Peek(); err != nil || value != 2 {
		t.Fatalf("peek = %d, %v", value, err)
	}
	for _, expected := range []int{2, 1} {
		if value, err := stack.Pop(); err != nil || value != expected {
			t.Fatalf("pop = %d, %v; want %d", value, err, expected)
		}
	}
	if stack.length != 0 {
		t.Fatal("stack did not empty")
	}
}
