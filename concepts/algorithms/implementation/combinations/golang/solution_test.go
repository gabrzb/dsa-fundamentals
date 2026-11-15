package solution

import (
	"reflect"
	"slices"
	"testing"
)

func TestCombinations(t *testing.T) {
	for _, tc := range []struct {
		n, k     int
		expected [][]int
	}{
		{4, 2, [][]int{{1, 2}, {1, 3}, {1, 4}, {2, 3}, {2, 4}, {3, 4}}},
		{3, 1, [][]int{{1}, {2}, {3}}},
		{3, 3, [][]int{{1, 2, 3}}},
		{3, 0, [][]int{{}}},
		{0, 0, [][]int{{}}},
		{0, 1, [][]int{}},
		{2, 3, [][]int{}},
	} {
		if got := combinations(tc.n, tc.k); !reflect.DeepEqual(got, tc.expected) {
			t.Errorf("combinations(%d, %d) = %v; want %v", tc.n, tc.k, got, tc.expected)
		}
	}
}

func TestInvalidCombinationSize(t *testing.T) {
	for _, pair := range [][2]int{{-1, 0}, {3, -1}} {
		func() {
			defer func() {
				if recover() == nil {
					t.Errorf("combinations(%d, %d) should panic", pair[0], pair[1])
				}
			}()
			combinations(pair[0], pair[1])
		}()
	}
}

func TestIndependentCombinations(t *testing.T) {
	result := combinations(3, 2)
	result[0][0] = 99
	if !slices.Equal(result[1], []int{1, 3}) {
		t.Fatal("combinations share their storage")
	}
}
