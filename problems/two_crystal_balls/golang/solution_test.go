package solution

import (
	"testing"
)

func TestEveryBoundary(t *testing.T) {
	for length := 0; length < 40; length++ {
		for boundary := 0; boundary <= length; boundary++ {
			values := make([]bool, length)
			for index := range values {
				values[index] = index >= boundary
			}
			expected := boundary
			if boundary == length {
				expected = -1
			}
			if got := two_crystal_balls(values); got != expected {
				t.Fatalf("length %d, boundary %d: got %d; want %d", length, boundary, got, expected)
			}
		}
	}
}
