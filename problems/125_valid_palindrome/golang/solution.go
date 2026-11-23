package solution

import "strings"

func isPalindrome(s string) bool {
	s = strings.ToLower(s)

	for i := 0; i < len(s); {
		if s[i] < '0' || (s[i] > '9' && s[i] < 'a') || s[i] > 'z' {
			s = s[:i] + s[i+1:]
			continue
		}
		i++
	}

	left, right := 0, len(s)-1

	for i := 0; i < len(s)/2; i++ {
		if s[left] != s[right] {
			return false
		}

		left++
		right--
	}

	return true
}
