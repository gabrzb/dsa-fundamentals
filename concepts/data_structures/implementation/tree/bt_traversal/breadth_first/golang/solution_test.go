package solution

import (
	btbase "dsa/concepts/data_structures/implementation/tree/bt_base/golang"
	"testing"
)

func TestTreeSearch(t *testing.T) {
	tree := btbase.NewBinaryNode(2, btbase.NewBinaryNode(1), btbase.NewBinaryNode(3))
	if !bfs(tree, 1) || bfs(tree, 4) || bfs(nil, 1) {
		t.Fatal("incorrect tree search")
	}
}
