package solution

import (
	btbase "dsa/concepts/data_structures/implementation/tree/bt_base/golang"
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
