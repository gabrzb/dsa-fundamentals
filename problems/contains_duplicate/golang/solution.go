package solution

func containsDuplicate(nums []int) bool {
	seen := make(map[int]int)

	for _, number := range nums {
		seen[number]++
		if seen[number] > 1 {
			return true
		}
	}

	return false
}
