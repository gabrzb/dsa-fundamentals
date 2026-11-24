package solution

func lowerASCIIAlphanumeric(c byte) byte {
	switch {
	case c >= 'A' && c <= 'Z':
		return c + ('a' - 'A')
	case c >= 'a' && c <= 'z', c >= '0' && c <= '9':
		return c
	default:
		return 0
	}
}

func isPalindrome(s string) bool {
	for left, right := 0, len(s)-1; left < right; {
		first := lowerASCIIAlphanumeric(s[left])

		if first == 0 {
			left++
			continue
		}

		last := lowerASCIIAlphanumeric(s[right])

		if last == 0 {
			right--
			continue
		}

		if first != last {
			return false
		}

		left++
		right--
	}

	return true
}
