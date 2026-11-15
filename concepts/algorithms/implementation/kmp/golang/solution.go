package solution

func build(pattern []rune) []int {
	table := make([]int, len(pattern))
	matched := 0
	for index := 1; index < len(pattern); index++ {
		for matched > 0 && pattern[index] != pattern[matched] {
			matched = table[matched-1]
		}
		if pattern[index] == pattern[matched] {
			matched++
		}
		table[index] = matched
	}
	return table
}
func PrefixTable(pattern string) []int { return build([]rune(pattern)) }
func FindAll(text, pattern string) []int {
	chars, needle := []rune(text), []rune(pattern)
	result := []int{}
	if len(needle) == 0 {
		for i := 0; i <= len(chars); i++ {
			result = append(result, i)
		}
		return result
	}
	table, matched := build(needle), 0
	for index, char := range chars {
		for matched > 0 && char != needle[matched] {
			matched = table[matched-1]
		}
		if char == needle[matched] {
			matched++
		}
		if matched == len(needle) {
			result = append(result, index-len(needle)+1)
			matched = table[matched-1]
		}
	}
	return result
}
