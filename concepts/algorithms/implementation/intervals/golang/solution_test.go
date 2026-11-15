package solution

import (
	"reflect"
	"slices"
	"testing"
)

func TestIntervals(t *testing.T) {
	for _, tc := range []struct{ input, want [][2]int }{
		{nil, [][2]int{}}, {[][2]int{{5, 7}, {1, 3}, {2, 4}}, [][2]int{{1, 4}, {5, 7}}}, {[][2]int{{1, 2}, {2, 3}}, [][2]int{{1, 3}}}, {[][2]int{{1, 1}, {2, 2}}, [][2]int{{1, 1}, {2, 2}}}, {[][2]int{{-3, 3}, {0, 0}}, [][2]int{{-3, 3}}},
	} {
		original := slices.Clone(tc.input)
		got := MergeIntervals(tc.input)
		if !reflect.DeepEqual(got, tc.want) {
			t.Fatalf("got %v", got)
		}
		if len(got) > 0 {
			got[0][0]--
		}
		if !slices.Equal(tc.input, original) {
			t.Fatal("input mutated")
		}
	}
	defer func() {
		if recover() == nil {
			t.Fatal("expected panic")
		}
	}()
	MergeIntervals([][2]int{{2, 1}})
}
