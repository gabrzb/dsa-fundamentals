package solution

import (
	btbase "dsa/concepts/data_structures/implementation/tree/bt_base/golang"
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

func checkTree(t *testing.T, root *btbase.BinaryNode[int], expected map[int]bool) {
	t.Helper()
	seen := map[*btbase.BinaryNode[int]]bool{}
	values := []int{}
	var visit func(*btbase.BinaryNode[int], *int, *int)
	visit = func(node *btbase.BinaryNode[int], low, high *int) {
		if node == nil {
			return
		}
		if seen[node] || low != nil && node.Value <= *low || high != nil && node.Value >= *high {
			t.Fatal("cycle, shared node or invalid global ordering")
		}
		seen[node] = true
		visit(node.Left, low, &node.Value)
		values = append(values, node.Value)
		visit(node.Right, &node.Value, high)
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

func TestAllSmallOrders(t *testing.T) {
	for _, insertion := range orders([]int{-2, 0, 1, 3}) {
		for _, deletion := range orders(insertion) {
			var root *btbase.BinaryNode[int]
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
			if root != nil || Remove(root, 99) != nil {
				t.Fatal("expected empty tree")
			}
		}
	}
}

func TestSuccessorWithRightChild(t *testing.T) {
	var root *btbase.BinaryNode[int]
	for _, value := range []int{8, 3, 12, 10, 14, 11} {
		root = Insert(root, value)
	}
	root = Remove(root, 8)
	if root.Value != 10 || root.Right.Left.Value != 11 {
		t.Fatal("successor child was lost")
	}
	checkTree(t, root, map[int]bool{3: true, 10: true, 11: true, 12: true, 14: true})
	root = Insert(Insert(nil, 2), 1)
	if Remove(root, 2) != root.Left {
		t.Fatal("root replacement was not returned")
	}
}
