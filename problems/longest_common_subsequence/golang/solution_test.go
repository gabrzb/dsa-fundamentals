package solution

import "testing"

func subsequences(text string) map[string]bool {
	chars := []rune(text)
	result := map[string]bool{}
	for mask := 0; mask < 1<<len(chars); mask++ {
		chosen := []rune{}
		for i, char := range chars {
			if mask&(1<<i) != 0 {
				chosen = append(chosen, char)
			}
		}
		result[string(chosen)] = true
	}
	return result
}

func TestAgainstSubsequenceIntersection(t *testing.T) {
	words := []string{}
	for length := 0; length <= 4; length++ {
		for mask := 0; mask < 1<<length; mask++ {
			word := make([]byte, length)
			for i := range word {
				word[i] = 'a'
				if mask&(1<<i) != 0 {
					word[i] = 'b'
				}
			}
			words = append(words, string(word))
		}
	}
	for _, a := range words {
		for _, b := range words {
			left, right := subsequences(a), subsequences(b)
			want := 0
			for s := range left {
				if right[s] {
					want = max(want, len([]rune(s)))
				}
			}
			for _, solve := range []func(string, string) int{Memoized, Tabulated} {
				if got := solve(a, b); got != want {
					t.Fatalf("%q %q: got %d want %d", a, b, got, want)
				}
			}
		}
	}
}

func TestOrderAndUnicode(t *testing.T) {
	for _, solve := range []func(string, string) int{Memoized, Tabulated} {
		for _, tc := range []struct {
			a, b string
			want int
		}{{"abcde", "ace", 3}, {"abc", "def", 0}, {"aaaa", "aa", 2}, {"abc", "cba", 1}, {"", "abc", 0}, {"x😀y😀", "😀😀", 2}, {"é", "e\u0301", 0}} {
			if got := solve(tc.a, tc.b); got != tc.want {
				t.Fatalf("got %d want %d", got, tc.want)
			}
		}
	}
}
