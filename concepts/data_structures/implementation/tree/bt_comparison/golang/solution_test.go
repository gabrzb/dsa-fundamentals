package solution

import (
	btbase "dsa/concepts/data_structures/implementation/tree/bt_base/golang"
	"testing"
)

func TestCompareStructureAndValues(t *testing.T) {
	if !compare(nil, nil) || !compare(btbase.NewBinaryNode(1), btbase.NewBinaryNode(1)) {
		t.Fatal("equal trees differ")
	}
	if compare(btbase.NewBinaryNode(1), nil) || compare(btbase.NewBinaryNode(1), btbase.NewBinaryNode(2)) {
		t.Fatal("different trees compare equal")
	}
	left := btbase.NewBinaryNode(1, btbase.NewBinaryNode(2))
	right := btbase.NewBinaryNode(1, nil, btbase.NewBinaryNode(2))
	if compare(left, right) {
		t.Fatal("different structure compares equal")
	}
}
