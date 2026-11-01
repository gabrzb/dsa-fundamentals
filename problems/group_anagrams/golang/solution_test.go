package solution

import (
	"slices"
	"strings"
	"testing"
)

func TestGroupAnagrams(t *testing.T) {
	normalize := func(groups [][]string) []string {
		result := []string{}
		for _, group := range groups {
			slices.Sort(group)
			result = append(result, strings.Join(group, ","))
		}
		slices.Sort(result)
		return result
	}
	got := normalize(groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat", ""}))
	expected := normalize([][]string{{"eat", "tea", "ate"}, {"tan", "nat"}, {"bat"}, {""}})
	if !slices.Equal(got, expected) {
		t.Fatalf("groups = %v; want %v", got, expected)
	}
	if got := groupAnagrams(nil); len(got) != 0 {
		t.Fatalf("empty groups = %v", got)
	}
}
