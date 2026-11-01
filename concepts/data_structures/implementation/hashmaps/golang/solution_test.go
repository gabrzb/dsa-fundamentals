package solution

import (
	"testing"
)

func TestCollisionsUpdatesAndRemovals(t *testing.T) {
	table := NewHashMap(1)
	table.Put("a", 1)
	table.Put("b", 2)
	table.Put("c", 3)
	table.Put("b", 20)
	table.Remove("a")
	table.Remove("c")
	table.Remove("missing")
	if value, ok := table.Get("b"); !ok || value != 20 {
		t.Fatalf("remaining value = %v, %t", value, ok)
	}
	for _, key := range []string{"a", "c", "missing"} {
		if _, ok := table.Get(key); ok {
			t.Fatalf("unexpected key %q", key)
		}
	}
}
