package solution

func MinimumCapacity(weights []int, days int) int {
	if days < 1 {
		panic("days must be positive")
	}
	low, high := 0, 0
	for _, weight := range weights {
		if weight <= 0 {
			panic("weights must be positive")
		}
		if weight > int(^uint(0)>>1)-high {
			panic("total weight must fit int")
		}
		low = max(low, weight)
		high += weight
	}
	feasible := func(capacity int) bool {
		used, load := 1, 0
		for _, weight := range weights {
			if weight > capacity-load {
				used++
				load = 0
			}
			load += weight
			if used > days {
				return false
			}
		}
		return true
	}
	for low < high {
		middle := low + (high-low)/2
		if feasible(middle) {
			high = middle
		} else {
			low = middle + 1
		}
	}
	return low
}
