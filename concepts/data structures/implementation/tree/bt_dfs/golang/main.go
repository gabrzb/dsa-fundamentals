package main

import (
	"fmt"

	btbase "dsa/concepts/data_structures/implementation/tree/bt_base"
)

func search(curr *btbase.BinaryNode[int], needle int) bool {
	if curr == nil {
		return false
	}

	if curr.Value == needle {
		return true
	} 

	if curr.Value < needle {
		return search(curr.Right, needle)
	}

	return search(curr.Left, needle)
}

func dfs(head *btbase.BinaryNode[int], needle int) bool {
	return search(head, needle)
}

func testDfs() {
	tree := btbase.NewBinaryNode(
		10,
		btbase.NewBinaryNode(5, btbase.NewBinaryNode(2), btbase.NewBinaryNode(7)),
		btbase.NewBinaryNode(15, btbase.NewBinaryNode(12), btbase.NewBinaryNode(20)),
	)

	fmt.Printf("Search for 7: %t | Expected: true\n", dfs(tree, 7))
	fmt.Printf("Search for 12: %t | Expected: true\n", dfs(tree, 12))
	fmt.Printf("Search for 8: %t | Expected: false\n", dfs(tree, 8))
}

func main() {
	testDfs()
}