package solution

import btbase "dsa/concepts/data_structures/implementation/tree/bt_base/golang"

func walkInOrder(curr *btbase.BinaryNode[int], path []int) []int {
	if curr == nil {
		return path
	}

	path = walkInOrder(curr.Left, path)
	path = append(path, curr.Value)
	path = walkInOrder(curr.Right, path)

	return path
}

func inOrderSearch(head *btbase.BinaryNode[int]) []int {
	return walkInOrder(head, []int{})
}
