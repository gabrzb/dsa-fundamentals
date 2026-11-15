package trie

import (
	"strings"
	"testing"
)

func TestSharedPrefixes(t *testing.T) {
	trie := New()
	if trie.Contains("") || !trie.StartsWith("") {
		t.Fatal("empty prefix")
	}
	for _, word := range []string{"", "car", "cat", "cater", "dog"} {
		if !trie.Insert(word) {
			t.Fatal("insert failed")
		}
	}
	if trie.Insert("cat") || !trie.Remove("cat") || trie.Contains("cat") || !trie.StartsWith("cat") || !trie.Contains("cater") {
		t.Fatal("shared prefix lost")
	}
	if !trie.Remove("cater") || trie.StartsWith("cat") || !trie.Contains("car") || trie.Remove("missing") {
		t.Fatal("pruning failed")
	}
	for _, word := range []string{"", "car", "dog"} {
		if !trie.Remove(word) {
			t.Fatal("remove failed")
		}
	}
	long := strings.Repeat("z", 2000)
	if !trie.Insert(long) || !trie.Remove(long) || trie.StartsWith("z") {
		t.Fatal("long path failed")
	}
	for _, op := range []func(string) bool{trie.Insert, trie.Contains, trie.StartsWith, trie.Remove} {
		func() {
			defer func() {
				if recover() == nil {
					t.Fatal("expected panic")
				}
			}()
			op("zz!")
		}()
	}
	if trie.StartsWith("zz") {
		t.Fatal("invalid insert mutated trie")
	}
}
