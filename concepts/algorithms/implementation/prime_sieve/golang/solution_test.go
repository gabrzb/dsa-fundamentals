package solution

import (
	"slices"
	"testing"
)

func TestTrialDivision(t *testing.T) {
	for limit := 0; limit <= 150; limit++ {
		want := []int{}
		for n := 2; n <= limit; n++ {
			prime := true
			for d := 2; d < n; d++ {
				if n%d == 0 {
					prime = false
				}
			}
			if prime {
				want = append(want, n)
			}
		}
		if !slices.Equal(PrimesUpTo(limit), want) {
			t.Fatal("wrong primes")
		}
	}
	if len(PrimesUpTo(1000)) != 168 {
		t.Fatal("wrong count")
	}
	defer func() {
		if recover() == nil {
			t.Fatal("expected panic")
		}
	}()
	PrimesUpTo(-1)
}
