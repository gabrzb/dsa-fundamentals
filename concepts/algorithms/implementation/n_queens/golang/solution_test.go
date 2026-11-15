package solution

import (
	"fmt"
	"reflect"
	"slices"
	"testing"
)

func TestNQueens(t *testing.T) {
	for n, expected := range []int{1, 1, 0, 0, 2, 10, 4, 40, 92} {
		solutions := nQueens(n)
		if len(solutions) != expected {
			t.Fatalf("nQueens(%d) returned %d solutions; want %d", n, len(solutions), expected)
		}
		seen := map[string]bool{}
		for _, placement := range solutions {
			key := fmt.Sprint(placement)
			if len(placement) != n || seen[key] {
				t.Fatalf("invalid or repeated solution for n=%d: %v", n, placement)
			}
			seen[key] = true
			for row, column := range placement {
				if column < 0 || column >= n {
					t.Fatalf("queen outside the board: %v", placement)
				}
				for previousRow, previousColumn := range placement[:row] {
					distance := row - previousRow
					if column == previousColumn || column-previousColumn == distance || previousColumn-column == distance {
						t.Fatalf("queens attack each other: %v", placement)
					}
				}
			}
		}
	}
}

func TestFourQueens(t *testing.T) {
	expected := [][]int{{1, 3, 0, 2}, {2, 0, 3, 1}}
	if got := nQueens(4); !reflect.DeepEqual(got, expected) {
		t.Fatalf("nQueens(4) = %v; want %v", got, expected)
	}
	result := nQueens(4)
	result[0][0] = 99
	if !slices.Equal(result[1], expected[1]) {
		t.Fatal("solutions share their storage")
	}
}

func TestInvalidBoardSize(t *testing.T) {
	defer func() {
		if recover() == nil {
			t.Fatal("negative board size should panic")
		}
	}()
	nQueens(-1)
}
