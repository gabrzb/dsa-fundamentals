package solution

import (
	"slices"
	"testing"
)

func orders(values []int) [][]int {
	if len(values) == 0 {
		return [][]int{{}}
	}
	result := [][]int{}
	for i, value := range values {
		rest := append(slices.Clone(values[:i]), values[i+1:]...)
		for _, order := range orders(rest) {
			result = append(result, append([]int{value}, order...))
		}
	}
	return result
}

func checkTree(t *testing.T, root *AVLNode, expected map[int]bool) {
	t.Helper()
	seen := map[*AVLNode]bool{}
	values := []int{}
	var visit func(*AVLNode, *int, *int) int
	visit = func(node *AVLNode, low, high *int) int {
		if node == nil {
			return 0
		}
		if seen[node] || low != nil && node.Value <= *low || high != nil && node.Value >= *high {
			t.Fatal("cycle, shared node or invalid global ordering")
		}
		seen[node] = true
		left := visit(node.Left, low, &node.Value)
		values = append(values, node.Value)
		right := visit(node.Right, &node.Value, high)
		if left-right > 1 || right-left > 1 || node.Height != 1+max(left, right) {
			t.Fatalf("invalid height or balance at %d", node.Value)
		}
		return node.Height
	}
	visit(root, nil, nil)
	want := []int{}
	for value := range expected {
		want = append(want, value)
	}
	slices.Sort(want)
	if !slices.Equal(values, want) {
		t.Fatalf("got %v; want %v", values, want)
	}
}

func TestInsertionRotations(t *testing.T) {
	for _, order := range [][]int{{30, 20, 10}, {10, 20, 30}, {30, 10, 20}, {10, 30, 20}} {
		var root *AVLNode
		for _, value := range order {
			root = Insert(root, value)
		}
		if root.Value != 20 || root.Left.Value != 10 || root.Right.Value != 30 {
			t.Fatal("incorrect rotation")
		}
		checkTree(t, root, map[int]bool{10: true, 20: true, 30: true})
	}
}

func TestAllSmallOrders(t *testing.T) {
	for _, insertion := range orders([]int{-2, 0, 1, 3}) {
		for _, deletion := range orders(insertion) {
			var root *AVLNode
			expected := map[int]bool{}
			for _, value := range insertion {
				root = Insert(root, value)
				expected[value] = true
				checkTree(t, root, expected)
			}
			if Insert(root, insertion[0]) != root || Remove(root, 99) != root {
				t.Fatal("unexpected root change")
			}
			checkTree(t, root, expected)
			for _, value := range deletion {
				root = Remove(root, value)
				delete(expected, value)
				checkTree(t, root, expected)
			}
			if Remove(root, 99) != nil {
				t.Fatal("expected empty tree")
			}
		}
	}
}

func TestDeletionWithBalancedHeavyChild(t *testing.T) {
	var root *AVLNode
	for _, value := range []int{4, 2, 5, 1, 3} {
		root = Insert(root, value)
	}
	root = Remove(root, 5)
	if root.Value != 2 || root.Right.Left.Value != 3 {
		t.Fatal("incorrect deletion rotation")
	}
	checkTree(t, root, map[int]bool{1: true, 2: true, 3: true, 4: true})
}

func TestMixedOperations(t *testing.T) {
	var root *AVLNode
	expected := map[int]bool{}
	for value := range 256 {
		root = Insert(root, value)
		expected[value] = true
		checkTree(t, root, expected)
	}
	state := uint32(12345)
	for range 1000 {
		state = 1664525*state + 1013904223
		value := int((state >> 8) % 320)
		if state&1 != 0 {
			root = Insert(root, value)
			expected[value] = true
		} else {
			root = Remove(root, value)
			delete(expected, value)
		}
		checkTree(t, root, expected)
	}
	remaining := []int{}
	for value := range expected {
		remaining = append(remaining, value)
	}
	slices.Sort(remaining)
	for _, value := range remaining {
		root = Remove(root, value)
		delete(expected, value)
		checkTree(t, root, expected)
	}
	if root != nil {
		t.Fatal("expected empty tree")
	}
}
