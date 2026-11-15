package unionfind

import "testing"

func TestAgainstRelabeling(t *testing.T) {
	sets := New(12)
	labels := make([]int, 12)
	for i := range labels {
		labels[i] = i
	}
	state := uint32(12345)
	for range 100 {
		state = 1664525*state + 1013904223
		a, b := int((state>>8)%12), int((state>>16)%12)
		left, right := labels[a], labels[b]
		if sets.Union(a, b) != (left != right) {
			t.Fatal("wrong merge result")
		}
		groups := map[int]bool{}
		for i, label := range labels {
			if label == right {
				labels[i] = left
			}
			groups[labels[i]] = true
		}
		if sets.Count() != len(groups) {
			t.Fatal("wrong component count")
		}
		for i := range 12 {
			count := 0
			for j := range 12 {
				if labels[i] == labels[j] {
					count++
				}
				if sets.Connected(i, j) != (labels[i] == labels[j]) {
					t.Fatal("wrong connectivity")
				}
			}
			if sets.ComponentSize(i) != count {
				t.Fatal("wrong component size")
			}
		}
	}
}

func TestCompressionAndSize(t *testing.T) {
	sets := New(9)
	for _, pair := range [][2]int{{0, 1}, {2, 3}, {0, 2}, {4, 5}, {6, 7}, {4, 6}, {0, 4}} {
		if !sets.Union(pair[0], pair[1]) {
			t.Fatal("expected merge")
		}
	}
	if sets.parent[7] != 6 {
		t.Fatal("expected an uncompressed path")
	}
	if sets.Find(7) != 0 || sets.parent[7] != 0 || sets.parent[6] != 0 || sets.parent[4] != 0 {
		t.Fatal("path not fully compressed")
	}
	if !sets.Union(8, 0) || sets.Find(8) != 0 || sets.Union(0, 0) || sets.Count() != 1 || sets.ComponentSize(8) != 9 {
		t.Fatal("size attachment failed")
	}
}

func TestEmptyAndInvalid(t *testing.T) {
	if New(0).Count() != 0 {
		t.Fatal("empty universe")
	}
	sets := New(2)
	for _, run := range []func(){func() { New(-1) }, func() { sets.Find(-1) }, func() { sets.Find(2) }, func() { sets.Union(0, 2) }, func() { sets.Connected(0, 2) }, func() { sets.ComponentSize(2) }} {
		func() {
			defer func() {
				if recover() == nil {
					t.Fatal("expected panic")
				}
			}()
			run()
		}()
	}
}
