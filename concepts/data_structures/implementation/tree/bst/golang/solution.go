package solution

import btbase "dsa/concepts/data_structures/implementation/tree/bt_base/golang"

func Insert(root *btbase.BinaryNode[int], value int) *btbase.BinaryNode[int] {
	if root == nil {
		return btbase.NewBinaryNode(value)
	}
	if value < root.Value {
		root.Left = Insert(root.Left, value)
	} else if value > root.Value {
		root.Right = Insert(root.Right, value)
	}
	return root
}

func Remove(root *btbase.BinaryNode[int], value int) *btbase.BinaryNode[int] {
	if root == nil {
		return nil
	}
	if value < root.Value {
		root.Left = Remove(root.Left, value)
	} else if value > root.Value {
		root.Right = Remove(root.Right, value)
	} else {
		if root.Left == nil {
			return root.Right
		}
		if root.Right == nil {
			return root.Left
		}
		successor := root.Right
		for successor.Left != nil {
			successor = successor.Left
		}
		root.Value = successor.Value
		root.Right = Remove(root.Right, successor.Value)
	}
	return root
}
