package solution

import (
	"testing"
)

func TestGrowthShrinkAndReuse(t *testing.T) {
	array := NewDynamicArray()
	for value := 0; value < 20; value++ {
		array.Insert(value)
	}
	for value := 0; value < 20; value++ {
		if array.Find(value) != 0 {
			t.Fatalf("first value should be %d", value)
		}
		array.Delete(value)
	}
	array.Insert(42)
	if array.Find(42) != 0 || array.Find(19) != -1 {
		t.Fatal("array cannot be reused")
	}
}
