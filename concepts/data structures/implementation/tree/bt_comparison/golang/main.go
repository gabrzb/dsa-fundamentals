package main

import (
	"fmt"

	btbase "dsa/concepts/data_structures/implementation/tree/bt_base"
)

func compare(a, b *btbase.BinaryNode[int]) bool {
	// Structure checks
	if a == nil && b == nil {
		return true
	}

	if a == nil || b == nil {
		return false
	}

	// Value check
	if a.Value != b.Value {
		return false
	}

	return compare(a.Left, b.Left) && compare(a.Right, b.Right)
}

func testCompare() {
	treeA := btbase.NewBinaryNode(
		1,
		btbase.NewBinaryNode(2),
		btbase.NewBinaryNode(3),
	)
	treeB := btbase.NewBinaryNode(
		1,
		btbase.NewBinaryNode(2),
		btbase.NewBinaryNode(3),
	)
	differentTree := btbase.NewBinaryNode(1, btbase.NewBinaryNode(2))

	fmt.Printf("Equal trees: %t | Expected: true\n", compare(treeA, treeB))
	fmt.Printf(
		"Different trees: %t | Expected: false\n",
		compare(treeA, differentTree),
	)
}

func main() {
	testCompare()
}
