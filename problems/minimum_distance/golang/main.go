package solution

func getMinDistance(nums []int, target int, start int) int {
	minDistance := len(nums)

	for i, values := range nums {
		if values == target {
			distance := i - start
			if distance < 0 {
				distance = -distance
			}
			if distance < minDistance {
				minDistance = distance
			}
		}
	}

	return minDistance
}
