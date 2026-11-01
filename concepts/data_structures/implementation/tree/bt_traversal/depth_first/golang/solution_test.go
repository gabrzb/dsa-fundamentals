package solution

import (
	btbase "dsa/concepts/data_structures/implementation/tree/bt_base/golang"
	"slices"
	"testing"
)

func TestTraversalOrders(t *testing.T) {
	tree := btbase.NewBinaryNode(2, btbase.NewBinaryNode(1), btbase.NewBinaryNode(3))
	cases := []struct {
		name     string
		traverse func(*btbase.BinaryNode[int]) []int
		expected []int
	}{
		{"in order", inOrderSearch, []int{1, 2, 3}}, {"pre order", preOrderSearch, []int{2, 1, 3}}, {"post order", postOrderSearch, []int{1, 3, 2}},
	}
	for _, tc := range cases {
		t.Run(tc.name, func(t *testing.T) {
			if got := tc.traverse(tree); !slices.Equal(got, tc.expected) {
				t.Fatalf("path = %v; want %v", got, tc.expected)
			}
			if got := tc.traverse(nil); len(got) != 0 {
				t.Fatalf("empty tree path = %v", got)
			}
		})
	}
}
