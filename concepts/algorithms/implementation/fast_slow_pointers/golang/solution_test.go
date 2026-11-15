package solution

import "testing"

func TestEveryTailAttachment(t *testing.T) {
	if CycleEntry(nil) != nil {
		t.Fatal("empty list")
	}
	for size := 1; size < 20; size++ {
		for entry := -1; entry < size; entry++ {
			nodes := make([]*Node, size)
			for i := range nodes {
				nodes[i] = &Node{Value: 1}
			}
			for i := 0; i < size-1; i++ {
				nodes[i].Next = nodes[i+1]
			}
			var want *Node
			if entry >= 0 {
				want = nodes[entry]
				nodes[size-1].Next = want
			}
			links := make([]*Node, size)
			for i, n := range nodes {
				links[i] = n.Next
			}
			if CycleEntry(nodes[0]) != want {
				t.Fatal("wrong entry identity")
			}
			for i, n := range nodes {
				if n.Next != links[i] {
					t.Fatal("input mutated")
				}
			}
		}
	}
}
