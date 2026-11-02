package solution

import (
	"slices"
	"testing"
)

func TestPrefixSums(t *testing.T) {
	for _, tc := range []struct {
		values, expected []int
	}{
		{nil, []int{0}},
		{[]int{5}, []int{0, 5}},
		{[]int{2, -1, 3, 0, -4}, []int{0, 2, 1, 4, 4, 0}},
		{[]int{-3, -2}, []int{0, -3, -5}},
	} {
		original := slices.Clone(tc.values)
		if got := prefixSums(tc.values); !slices.Equal(got, tc.expected) {
			t.Errorf("prefixSums(%v) = %v; want %v", tc.values, got, tc.expected)
		}
		if !slices.Equal(tc.values, original) {
			t.Fatal("input was modified")
		}
	}
}

func TestRangeSum(t *testing.T) {
	values := []int{2, -1, 3, 0, -4}
	prefix := prefixSums(values)
	for start := 0; start <= len(values); start++ {
		for end := start; end <= len(values); end++ {
			expected := 0
			for _, value := range values[start:end] {
				expected += value
			}
			if got := rangeSum(prefix, start, end); got != expected {
				t.Errorf("rangeSum(%d, %d) = %d; want %d", start, end, got, expected)
			}
		}
	}
	if got := rangeSum(prefixSums(nil), 0, 0); got != 0 {
		t.Errorf("empty range sum = %d; want 0", got)
	}
}

func TestInvalidRange(t *testing.T) {
	for _, tc := range []struct {
		prefix     []int
		start, end int
	}{
		{[]int{0, 1, 3}, -1, 1},
		{[]int{0, 1, 3}, 2, 1},
		{[]int{0, 1, 3}, 0, 3},
		{nil, 0, 0},
	} {
		func() {
			defer func() {
				if recover() == nil {
					t.Errorf("range [%d, %d) for %v should panic", tc.start, tc.end, tc.prefix)
				}
			}()
			rangeSum(tc.prefix, tc.start, tc.end)
		}()
	}
}
