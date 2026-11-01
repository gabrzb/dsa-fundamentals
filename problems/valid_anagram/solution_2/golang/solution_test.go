package solution

import (
	"testing"
)

func TestAnagrams(t *testing.T) {
	for _, tc := range []struct {
		left, right string
		expected    bool
	}{
		{"anagram", "nagaram", true}, {"", "", true}, {"rat", "car", false}, {"a", "aa", false}, {"aab", "abb", false},
	} {
		if got := isAnagram(tc.left, tc.right); got != tc.expected {
			t.Errorf("isAnagram(%q, %q) = %t; want %t", tc.left, tc.right, got, tc.expected)
		}
	}
}
