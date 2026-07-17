package main

import "fmt"

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
		
	            last := stack[len(stack) - 1]
		
	            if last != pairs[current] {
	                return false
	            }
		
	            stack = stack[:len(stack)-1]
		}
	}
	
	return len(stack) == 0
}

func main() {
	// test cases (QUESTION.md)
	testCases := []struct {
		string   string
		expected bool
	}{
		{string: "()", expected: true},
		{string: "()[]{}", expected: true},
		{string: "(]", expected: false},
		{string: "([])", expected: true},
		{string: "([)]", expected: false},
	}

	for _, testCase := range testCases {
		result := isValid(testCase.string)
		fmt.Printf(
			"isValid('%s') = %t | Expected: %t\n",
			testCase.string,
			result,
			testCase.expected,
		)
	}
}