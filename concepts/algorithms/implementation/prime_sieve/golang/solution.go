package solution

func PrimesUpTo(limit int) []int {
	if limit < 0 || limit == int(^uint(0)>>1) {
		panic("limit must be nonnegative with representable limit + 1")
	}
	prime := make([]bool, limit+1)
	result := []int{}
	for value := 2; value <= limit; value++ {
		prime[value] = true
	}
	for candidate := 2; candidate <= limit/candidate; candidate++ {
		if prime[candidate] {
			for multiple := candidate * candidate; multiple <= limit; {
				prime[multiple] = false
				if limit-multiple < candidate {
					break
				}
				multiple += candidate
			}
		}
	}
	for value := 2; value <= limit; value++ {
		if prime[value] {
			result = append(result, value)
		}
	}
	return result
}
