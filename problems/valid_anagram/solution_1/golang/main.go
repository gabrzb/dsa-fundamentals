package main

import "fmt"

func isAnagram(s, t string) bool {
	if len(s) != len(t) {
		return false
	}

	alphabet := make([]int, 26)
	
	for i := 0; i < len(s); i++ {
		alphabet[s[i]-'a']++
		alphabet[t[i]-'a']--
	}

	for _, count := range alphabet {
		if count != 0 {
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
		{s: "anagram", t: "nagaram", expected: true},
		{s: "rat", t: "car", expected: false},
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