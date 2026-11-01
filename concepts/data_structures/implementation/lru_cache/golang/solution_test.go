package solution

import (
	"testing"
)

func TestEvictionReadRefreshAndUpdate(t *testing.T) {
	cache := NewLRU[string, int](2)
	cache.Update("a", 1)
	cache.Update("b", 2)
	if value, ok := cache.Get("a"); !ok || value != 1 {
		t.Fatal("missing cached value")
	}
	cache.Update("c", 3)
	if _, ok := cache.Get("b"); ok {
		t.Fatal("least recent key was not evicted")
	}
	cache.Update("a", 10)
	cache.Update("d", 4)
	if _, ok := cache.Get("c"); ok {
		t.Fatal("update did not refresh recency")
	}
	if value, ok := cache.Get("a"); !ok || value != 10 {
		t.Fatal("update lost cached value")
	}
	if cache.length != 2 {
		t.Fatal("update changed cache length")
	}
}
