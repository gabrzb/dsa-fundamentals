package main

import "fmt"

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	count := make(map[rune]int)

	for _, char := range s {
		count[char]++
	}

	for _, char := range t {
		count[char]--
		if count[char] < 0 {
			return false
		}
	}

	return true
}

func testAnagram() {
	testCases := []struct {
		s        string
		t        string
		expected bool
	}{
		{"anagram", "nagaram", true},
		{"rat", "car", false},
	}

	for _, tc := range testCases {
		result := isAnagram(tc.s, tc.t)
		fmt.Printf(
			"isAnagram(%q, %q) = %v | Expected: %v\n",
			tc.s,
			tc.t,
			result,
			tc.expected,
		)
	}
}

func main() {
	testAnagram()
}