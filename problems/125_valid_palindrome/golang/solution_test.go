package solution

import "testing"

func TestIsPalindrome(t *testing.T) {
	for _, tc := range []struct {
		input    string
		expected bool
	}{
		{"A man, a plan, a canal: Panama", true},
		{"race a car", false},
		{" ", true},
		{"[,A,7a!!", true},
		{"a,,", true},
		{"0P", false},
	} {
		if got := isPalindrome(tc.input); got != tc.expected {
			t.Errorf("isPalindrome(%q) = %t; want %t", tc.input, got, tc.expected)
		}
	}
}
