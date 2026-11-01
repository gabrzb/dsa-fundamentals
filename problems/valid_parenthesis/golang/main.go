package solution

func isValid(s string) bool {
	stack := []byte{}

	pairs := map[byte]byte{
		'}': '{',
		')': '(',
		']': '[',
	}

	for i := 0; i < len(s); i++ {
		current := s[i]

		switch current {
		case '{', '(', '[':
			stack = append(stack, current)
		case '}', ')', ']':
			if len(stack) == 0 {
				return false
			}

			last := stack[len(stack)-1]

			if last != pairs[current] {
				return false
			}

			stack = stack[:len(stack)-1]
		}
	}

	return len(stack) == 0
}
