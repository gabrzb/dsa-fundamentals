package main

import btbase "dsa/concepts/data_structures/implementation/tree/bt_base"

func walkInOrder(curr *btbase.BinaryNode[int], path []int) []int {
	if curr == nil {
		return path
	}

	// Recursion
	// Pre
	// Recurse
	path = walkInOrder(curr.Left, path)
	path = append(path, curr.Value)
	path = walkInOrder(curr.Right, path)

	// Post
	return path
}

func inOrderSearch(head *btbase.BinaryNode[int]) []int {
	return walkInOrder(head, []int{})
}

func testInOrderSearch() {
	tree := btbase.NewBinaryNode(
		1,
		btbase.NewBinaryNode(
			2,
			btbase.NewBinaryNode(4),
			btbase.NewBinaryNode(5),
		),
		btbase.NewBinaryNode(3),
	)
	result := inOrderSearch(tree)

	printPath("In-order", result, []int{4, 2, 5, 1, 3})
}
