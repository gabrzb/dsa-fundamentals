package solution

func nQueens(n int) [][]int {
	if n < 0 {
		panic("board size must be nonnegative")
	}
	result := [][]int{}
	path := []int{}
	columns := make([]bool, n)
	rising := make([]bool, 2*n)
	falling := make([]bool, 2*n)

	var visit func(int)
	visit = func(row int) {
		if row == n {
			result = append(result, append([]int{}, path...))
			return
		}
		for column := 0; column < n; column++ {
			up, down := row+column, row-column+n
			if columns[column] || rising[up] || falling[down] {
				continue
			}
			columns[column], rising[up], falling[down] = true, true, true
			path = append(path, column)
			visit(row + 1)
			path = path[:len(path)-1]
			columns[column], rising[up], falling[down] = false, false, false
		}
	}

	visit(0)
	return result
}
