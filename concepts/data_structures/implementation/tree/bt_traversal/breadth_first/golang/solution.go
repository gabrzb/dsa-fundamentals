package solution

import (
	btbase "dsa/concepts/data_structures/implementation/tree/bt_base/golang"
)

func bfs(head *btbase.BinaryNode[int], needle int) bool {
	queue := []*btbase.BinaryNode[int]{head}

	for len(queue) > 0 {
		curr := queue[0]
		queue = queue[1:]

		if curr == nil {
			continue
		}

		if curr.Value == needle {
			return true
		}

		queue = append(queue, curr.Left)
		queue = append(queue, curr.Right)
	}

	return false
}
