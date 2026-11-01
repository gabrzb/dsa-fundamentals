package btbase

import "testing"

func TestNodeChildren(t *testing.T) {
	left, right := NewBinaryNode(1), NewBinaryNode(3)
	root := NewBinaryNode(2, left, right)
	if root.Value != 2 || root.Left != left || root.Right != right {
		t.Fatal("node lost values or children")
	}
	if left.Left != nil || left.Right != nil {
		t.Fatal("leaf has children")
	}
}
