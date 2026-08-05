package main

import (
	"fmt"

	btbase "dsa/concepts/data_structures/implementation/tree/bt_base"
)

func bfs(head *btbase.BinaryNode[int], needle int) bool {
	queue := []*btbase.BinaryNode[int]{head}

	for len(queue) > 0 {
		curr := queue[0]
		queue = queue[1:]

		if curr == nil {
			continue
		}

		// Search
		if curr.Value == needle {
			return true
		}

		queue = append(queue, curr.Left)
		queue = append(queue, curr.Right)
	}

	return false
}

func testBFS() {
	tree := btbase.NewBinaryNode(
		10,
		btbase.NewBinaryNode(
			5,
			btbase.NewBinaryNode(2),
			btbase.NewBinaryNode(7),
		),
		btbase.NewBinaryNode(15),
	)

	fmt.Printf("Search for 7: %t | Expected: true\n", bfs(tree, 7))
	fmt.Printf("Search for 20: %t | Expected: false\n", bfs(tree, 20))
}

func main() {
	testBFS()
}
