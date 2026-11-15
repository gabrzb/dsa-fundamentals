package solution

type AVLNode struct {
	Value       int
	Left, Right *AVLNode
	Height      int
}

func height(node *AVLNode) int {
	if node == nil {
		return 0
	}
	return node.Height
}

func update(node *AVLNode) {
	node.Height = 1 + max(height(node.Left), height(node.Right))
}

func rotateRight(root *AVLNode) *AVLNode {
	pivot := root.Left
	root.Left = pivot.Right
	pivot.Right = root
	update(root)
	update(pivot)
	return pivot
}

func rotateLeft(root *AVLNode) *AVLNode {
	pivot := root.Right
	root.Right = pivot.Left
	pivot.Left = root
	update(root)
	update(pivot)
	return pivot
}

func rebalance(root *AVLNode) *AVLNode {
	update(root)
	balance := height(root.Left) - height(root.Right)
	if balance > 1 {
		if height(root.Left.Left) < height(root.Left.Right) {
			root.Left = rotateLeft(root.Left)
		}
		return rotateRight(root)
	}
	if balance < -1 {
		if height(root.Right.Right) < height(root.Right.Left) {
			root.Right = rotateRight(root.Right)
		}
		return rotateLeft(root)
	}
	return root
}

func Insert(root *AVLNode, value int) *AVLNode {
	if root == nil {
		return &AVLNode{Value: value, Height: 1}
	}
	if value < root.Value {
		root.Left = Insert(root.Left, value)
	} else if value > root.Value {
		root.Right = Insert(root.Right, value)
	} else {
		return root
	}
	return rebalance(root)
}

func Remove(root *AVLNode, value int) *AVLNode {
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
	return rebalance(root)
}
