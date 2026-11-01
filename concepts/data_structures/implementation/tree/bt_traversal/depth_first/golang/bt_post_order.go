package solution

import btbase "dsa/concepts/data_structures/implementation/tree/bt_base/golang"

func walkPostOrder(curr *btbase.BinaryNode[int], path []int) []int {
	if curr == nil {
		return path
	}

	path = walkPostOrder(curr.Left, path)
	path = walkPostOrder(curr.Right, path)

	path = append(path, curr.Value)
	return path
}

func postOrderSearch(head *btbase.BinaryNode[int]) []int {
	return walkPostOrder(head, []int{})
}
