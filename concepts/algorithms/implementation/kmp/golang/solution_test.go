package solution

import (
	"slices"
	"testing"
)

func TestMatchesAndBorders(t *testing.T) {
	for _, tc := range []struct {
		text, pattern string
		want          []int
	}{{"aaaa", "aa", []int{0, 1, 2}}, {"ababab", "abab", []int{0, 2}}, {"abc", "x", nil}, {"", "", []int{0}}, {"abc", "", []int{0, 1, 2, 3}}, {"x😀😀😀", "😀😀", []int{1, 2}}, {"ab", "abcd", nil}} {
		if got := FindAll(tc.text, tc.pattern); !slices.Equal(got, tc.want) {
			t.Fatalf("got %v want %v", got, tc.want)
		}
	}
	if !slices.Equal(PrefixTable("ababaca"), []int{0, 0, 1, 2, 3, 0, 1}) || len(PrefixTable("")) != 0 {
		t.Fatal("wrong prefix table")
	}
}
