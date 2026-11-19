package solution

import "testing"

func TestCounts(t *testing.T) {
	for n := 0; n <= 45; n++ {
		expected := int64(0)
		for twos := 0; twos <= n/2; twos++ {
			ways := int64(1)
			for i := 1; i <= twos; i++ {
				ways = ways * int64(n-twos-i+1) / int64(i)
			}
			expected += ways
		}
		for _, solve := range []func(int) int{Memoized, Tabulated} {
			if got := solve(n); int64(got) != expected {
				t.Fatalf("n=%d: got %d want %d", n, got, expected)
			}
		}
	}
}

func TestInvalidSizes(t *testing.T) {
	for _, solve := range []func(int) int{Memoized, Tabulated} {
		for _, n := range []int{-1, 46} {
			func() {
				defer func() {
					if recover() == nil {
						t.Fatal("expected panic")
					}
				}()
				solve(n)
			}()
		}
	}
}
