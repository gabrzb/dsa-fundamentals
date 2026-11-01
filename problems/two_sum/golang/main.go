package solution

func twoSum(nums []int, target int) []int {
	prevMap := make(map[int]int)

	for i, num := range nums {
		diff := target - num

		if index, ok := prevMap[diff]; ok {
			return []int{index, i}
		}

		prevMap[num] = i
	}

	return nil
}
