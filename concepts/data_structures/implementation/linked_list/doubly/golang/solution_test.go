package solution

import (
	"testing"
)

func TestPositionsDeletionAndLinks(t *testing.T) {
	list := NewDoublyLinkedList()
	list.InsertAtPosition(1, 0)
	list.InsertAtPosition(3, 1)
	list.InsertAtPosition(2, 1)
	if list.Head.Next.Prev != list.Head || list.Tail.Prev.Next != list.Tail {
		t.Fatal("broken links")
	}
	for _, value := range []int{2, 1, 3} {
		list.Delete(value)
		if list.search(value) != nil {
			t.Fatalf("value %d was not deleted", value)
		}
	}
	if list.Head != nil || list.Tail != nil {
		t.Fatal("list did not empty")
	}
}
