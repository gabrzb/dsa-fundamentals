package solution

import "slices"

func subsets(values []int) [][]int {
	values = slices.Clone(values)
	slices.Sort(values)
	result := [][]int{}
	path := []int{}

	var visit func(int)
	visit = func(start int) {
		result = append(result, append([]int{}, path...))
		for index := start; index < len(values); index++ {
			if index > start && values[index] == values[index-1] {
				continue
			}
			path = append(path, values[index])
			visit(index + 1)
			path = path[:len(path)-1]
		}
	}

	visit(0)
	return result
}
