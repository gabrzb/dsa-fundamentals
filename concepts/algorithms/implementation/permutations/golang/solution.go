package solution

import "slices"

func permutations(values []int) [][]int {
	values = slices.Clone(values)
	slices.Sort(values)
	result := [][]int{}
	path := []int{}
	used := make([]bool, len(values))

	var visit func()
	visit = func() {
		if len(path) == len(values) {
			result = append(result, append([]int{}, path...))
			return
		}
		for index, value := range values {
			if used[index] || index > 0 && value == values[index-1] && !used[index-1] {
				continue
			}
			used[index] = true
			path = append(path, value)
			visit()
			path = path[:len(path)-1]
			used[index] = false
		}
	}

	visit()
	return result
}
