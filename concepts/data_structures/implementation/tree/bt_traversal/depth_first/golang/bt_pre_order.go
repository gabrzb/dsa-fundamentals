package solution

import btbase "dsa/concepts/data_structures/implementation/tree/bt_base/golang"

func walkPreOrder(curr *btbase.BinaryNode[int], path []int) []int {
	if curr == nil {
		return path
	}

	path = append(path, curr.Value)

	path = walkPreOrder(curr.Left, path)
	path = walkPreOrder(curr.Right, path)

	return path
}

func preOrderSearch(head *btbase.BinaryNode[int]) []int {
	return walkPreOrder(head, []int{})
}
