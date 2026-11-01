package solution

import (
	btbase "dsa/concepts/data_structures/implementation/tree/bt_base/golang"
)

func compare(a, b *btbase.BinaryNode[int]) bool {

	if a == nil && b == nil {
		return true
	}

	if a == nil || b == nil {
		return false
	}

	if a.Value != b.Value {
		return false
	}

	return compare(a.Left, b.Left) && compare(a.Right, b.Right)
}
