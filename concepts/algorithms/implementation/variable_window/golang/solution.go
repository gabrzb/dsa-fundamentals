package solution

func MinSubarrayLen(values []int, target int) int {
	if target <= 0 {
		panic("target must be positive")
	}
	for _, v := range values {
		if v <= 0 {
			panic("values must be positive")
		}
	}
	left, total, best := 0, 0, len(values)+1
	for right, value := range values {
		if value > int(^uint(0)>>1)-total {
			panic("window sum must fit int")
		}
		total += value
		for total >= target {
			best = min(best, right-left+1)
			total -= values[left]
			left++
		}
	}
	if best > len(values) {
		return 0
	}
	return best
}
