package solution

import "slices"

func MergeIntervals(intervals [][2]int) [][2]int {
	for _, interval := range intervals {
		if interval[0] > interval[1] {
			panic("interval start must not exceed its end")
		}
	}
	ordered := slices.Clone(intervals)
	slices.SortFunc(ordered, func(a, b [2]int) int {
		if a[0] < b[0] || a[0] == b[0] && a[1] < b[1] {
			return -1
		}
		if a == b {
			return 0
		}
		return 1
	})
	result := make([][2]int, 0)
	for _, interval := range ordered {
		if len(result) > 0 && interval[0] <= result[len(result)-1][1] {
			result[len(result)-1][1] = max(result[len(result)-1][1], interval[1])
		} else {
			result = append(result, interval)
		}
	}
	return result
}
