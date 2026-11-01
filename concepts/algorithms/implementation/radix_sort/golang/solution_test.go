package solution

import (
	"slices"
	"testing"
)

func TestSort(t *testing.T) {
	cases := [][]int{{}, {1}, {3, 1, 2, 1}, {0, 10, 2, 100}, {1, 2, 3}, {3, 2, 1}}
	for _, input := range cases {
		values := slices.Clone(input)
		expected := slices.Clone(input)
		slices.Sort(expected)
		got := radixSort(values)
		if !slices.Equal(got, expected) {
			t.Errorf("sort(%v) = %v; want %v", input, got, expected)
		}
	}
}

func TestRejectNegativeIntegers(t *testing.T) {
	defer func() {
		if recover() == nil {
			t.Fatal("expected panic for negative integers")
		}
	}()
	radixSort([]int{-1, 2})
}

func TestLargestInteger(t *testing.T) {
	largest := int(^uint(0) >> 1)
	if got := radixSort([]int{largest, 0, 1}); !slices.Equal(got, []int{0, 1, largest}) {
		t.Fatalf("sort = %v", got)
	}
}
