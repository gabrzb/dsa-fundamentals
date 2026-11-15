package solution

func combinations(n, k int) [][]int {
	if n < 0 || k < 0 {
		panic("n and k must be nonnegative")
	}
	result := [][]int{}
	path := []int{}

	var visit func(int)
	visit = func(start int) {
		if len(path) == k {
			result = append(result, append([]int{}, path...))
			return
		}
		last := n - (k - len(path)) + 1
		for value := start; value <= last; value++ {
			path = append(path, value)
			visit(value + 1)
			path = path[:len(path)-1]
		}
	}

	visit(1)
	return result
}
