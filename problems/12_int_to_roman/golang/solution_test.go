package solution

import (
	"testing"
)

func TestRomanNumerals(t *testing.T) {
	for _, tc := range []struct {
		number   int
		expected string
	}{{1, "I"}, {4, "IV"}, {9, "IX"}, {58, "LVIII"}, {1994, "MCMXCIV"}, {3999, "MMMCMXCIX"}} {
		if got := intToRoman(tc.number); got != tc.expected {
			t.Errorf("intToRoman(%d) = %q; want %q", tc.number, got, tc.expected)
		}
	}
}
