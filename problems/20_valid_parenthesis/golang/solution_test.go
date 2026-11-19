package solution

import (
	"testing"
)

func TestParentheses(t *testing.T) {
	for _, tc := range []struct {
		value    string
		expected bool
	}{{"", true}, {"()[]{}", true}, {"([])", true}, {"([)]", false}, {"]", false}, {"((", false}} {
		if got := isValid(tc.value); got != tc.expected {
			t.Errorf("isValid(%q) = %t; want %t", tc.value, got, tc.expected)
		}
	}
}
