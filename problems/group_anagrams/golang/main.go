package main

import "fmt"

func groupAnagrams(strs []string) [][]string {
	res := make(map[[26]int][]string)

	for _, str := range strs {
		var count [26]int

		for _, char := range str {
			count[char-'a']++
		}

		res[count] = append(res[count], str)
	}

	groups := make([][]string, 0, len(res))

	for _, group := range res {
		groups = append(groups, group)
	}

	return groups
}

func testGroupAnagrams() {
	tests := []struct {
		input    []string
		expected [][]string
	}{
		{
			input:    []string{"eat", "tea", "tan", "ate", "nat", "bat"},
			expected: [][]string{{"eat", "tea", "ate"}, {"tan", "nat"}, {"bat"}},
		},
		{
			input:    []string{""},
			expected: [][]string{{""}},
		},
		{
			input:    []string{"a"},
			expected: [][]string{{"a"}},
		},
	}

	for i, test := range tests {
		result := groupAnagrams(test.input)
		fmt.Printf("Test %d:\nInput: %v\nExpected: %v\nResult: %v\n\n", i+1, test.input, test.expected, result)
	}
}

func main() {
	testGroupAnagrams()
}
