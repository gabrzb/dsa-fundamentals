package solution

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
