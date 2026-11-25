package solution

import (
	"slices"
	"testing"
)

func TestDailyTemperatures(t *testing.T) {
	cases := []struct {
		temperatures []int
		expected     []int
	}{
		{[]int{73, 74, 75, 71, 69, 72, 76, 73}, []int{1, 1, 4, 2, 1, 1, 0, 0}},
		{[]int{30, 40, 50, 60}, []int{1, 1, 1, 0}},
		{[]int{30, 60, 90}, []int{1, 1, 0}},
	}

	for _, tc := range cases {
		if got := dailyTemperatures(tc.temperatures); !slices.Equal(got, tc.expected) {
			t.Errorf("dailyTemperatures(%v) = %v; want %v", tc.temperatures, got, tc.expected)
		}
	}
}
