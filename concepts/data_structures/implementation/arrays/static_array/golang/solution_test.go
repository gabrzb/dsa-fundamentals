package solution

import (
	"testing"
)

func TestCapacityAndDeletion(t *testing.T) {
	array := NewStaticArray(2)
	array.Insert(10)
	array.Insert(20)
	array.Delete(0)
	if array.Find(20) != 0 || array.Find(10) != -1 {
		t.Fatal("deletion did not shift elements")
	}
	array.Insert(30)
	if array.Find(30) != 1 {
		t.Fatal("array cannot be reused")
	}
}
func TestOverflow(t *testing.T) {
	defer func() {
		if recover() == nil {
			t.Fatal("expected overflow panic")
		}
	}()
	array := NewStaticArray(0)
	array.Insert(1)
}
