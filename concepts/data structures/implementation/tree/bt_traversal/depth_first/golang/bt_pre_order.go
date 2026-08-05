package main

import btbase "dsa/concepts/data_structures/implementation/tree/bt_base"

func walkPreOrder(curr *btbase.BinaryNode[int], path []int) []int {
	if curr == nil {
		return path
	}

	// Recursion
	// Pre
	path = append(path, curr.Value)

	// Recurse
	path = walkPreOrder(curr.Left, path)
	path = walkPreOrder(curr.Right, path)

	// Post
	return path
}

func preOrderSearch(head *btbase.BinaryNode[int]) []int {
	return walkPreOrder(head, []int{})
}

func testPreOrderSearch() {
	tree := btbase.NewBinaryNode(
		1,
		btbase.NewBinaryNode(
			2,
			btbase.NewBinaryNode(4),
			btbase.NewBinaryNode(5),
		),
		btbase.NewBinaryNode(3),
	)
	result := preOrderSearch(tree)

	printPath("Pre-order", result, []int{1, 2, 4, 5, 3})
}
