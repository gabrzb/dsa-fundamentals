package btbase

type BinaryNode[T any] struct {
	Value T
	Left  *BinaryNode[T]
	Right *BinaryNode[T]
}

func NewBinaryNode[T any](value T, children ...*BinaryNode[T]) *BinaryNode[T] {
	node := &BinaryNode[T]{Value: value}

	if len(children) > 0 {
		node.Left = children[0]
	}

	if len(children) > 1 {
		node.Right = children[1]
	}

	return node
}
