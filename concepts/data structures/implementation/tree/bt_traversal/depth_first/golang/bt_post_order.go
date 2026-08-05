package main

import btbase "dsa/concepts/data_structures/implementation/tree/bt_base"

func walkPostOrder(curr *btbase.BinaryNode[int], path []int) []int {
	if curr == nil {
		return path
	}

	// Recursion
	// Pre
	// Recurse
	path = walkPostOrder(curr.Left, path)
	path = walkPostOrder(curr.Right, path)

	// Post
	path = append(path, curr.Value)
	return path
}

func postOrderSearch(head *btbase.BinaryNode[int]) []int {
	return walkPostOrder(head, []int{})
}

func testPostOrderSearch() {
	tree := btbase.NewBinaryNode(
		1,
		btbase.NewBinaryNode(
			2,
			btbase.NewBinaryNode(4),
			btbase.NewBinaryNode(5),
		),
		btbase.NewBinaryNode(3),
	)
	result := postOrderSearch(tree)

	printPath("Post-order", result, []int{4, 5, 2, 3, 1})
}
