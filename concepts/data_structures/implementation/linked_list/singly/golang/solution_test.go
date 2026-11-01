package solution

import (
	"testing"
)

func TestInsertSearchAndDelete(t *testing.T) {
	list := NewLinkedList()
	list.insertToFront(2)
	list.insertToFront(1)
	list.insertToBack(3)
	if list.search(2) == nil {
		t.Fatal("missing inserted value")
	}
	for _, value := range []int{2, 1, 3} {
		list.delete(value)
		if list.search(value) != nil {
			t.Fatalf("value %d was not deleted", value)
		}
	}
	if list.head != nil {
		t.Fatal("list did not empty")
	}
}
