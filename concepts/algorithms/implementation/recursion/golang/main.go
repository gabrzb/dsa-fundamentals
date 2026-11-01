package solution

type Point struct {
	X int
	Y int
}

var dir = [][]int{
	{-1, 0},
	{1, 0},
	{0, -1},
	{0, 1},
}

func walk(
	maze []string,
	wall byte,
	curr Point,
	end Point,
	seen [][]bool,
	path *[]Point,
) bool {

	if curr.X < 0 || curr.X >= len(maze[0]) || curr.Y < 0 || curr.Y >= len(maze) {
		return false
	}

	if maze[curr.Y][curr.X] == wall {
		return false
	}

	if curr == end {
		*path = append(*path, end)
		return true
	}

	if seen[curr.Y][curr.X] {
		return false
	}

	seen[curr.Y][curr.X] = true
	*path = append(*path, curr)

	for _, direction := range dir {
		next := Point{
			X: curr.X + direction[0],
			Y: curr.Y + direction[1],
		}

		if walk(maze, wall, next, end, seen, path) {
			return true
		}
	}

	*path = (*path)[:len(*path)-1]

	return false
}

func solve(maze []string, wall byte, start Point, end Point) []Point {
	seen := make([][]bool, len(maze))
	path := make([]Point, 0)

	for index := range maze {
		seen[index] = make([]bool, len(maze[0]))
	}

	walk(maze, wall, start, end, seen, &path)

	return path
}
