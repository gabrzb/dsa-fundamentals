package solution

import "testing"

func TestDivisorEnumeration(t *testing.T) {
	for a := uint64(0); a < 50; a++ {
		for b := uint64(0); b < 50; b++ {
			want := max(a, b)
			if a > 0 && b > 0 {
				want = 1
				for d := uint64(1); d <= min(a, b); d++ {
					if a%d == 0 && b%d == 0 {
						want = d
					}
				}
			}
			if GCD(a, b) != want {
				t.Fatal("wrong gcd")
			}
		}
	}
	if GCD(1071, 462) != 21 {
		t.Fatal("example failed")
	}
}
