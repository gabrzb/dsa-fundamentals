package main

import "fmt"

type Point struct {
	X int
	Y int
}

var dir = [][]int{
	{-1, 0}, // left
	{1, 0},  // right
	{0, -1}, // up
	{0, 1},  // down
}

func walk(
	maze []string,
	wall byte,
	curr Point,
	end Point,
	seen [][]bool,
	path *[]Point,
) bool {
	// 1. Base Case -> Off the map
	if curr.X < 0 || curr.X >= len(maze[0]) || curr.Y < 0 || curr.Y >= len(maze) {
		return false
	}

	// 2. Base Case -> Hit a wall
	if maze[curr.Y][curr.X] == wall {
		return false
	}

	// 3. Base Case -> Found the end
	if curr == end {
		*path = append(*path, end)
		return true
	}

	// 4. Base Case -> Already visited
	if seen[curr.Y][curr.X] {
		return false
	}

	// Pre
	seen[curr.Y][curr.X] = true
	*path = append(*path, curr)

	// Recurse
	for _, direction := range dir {
		next := Point{
			X: curr.X + direction[0],
			Y: curr.Y + direction[1],
		}

		if walk(maze, wall, next, end, seen, path) {
			return true
		}
	}

	// Post
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

func testMazeSolver() {
	maze := []string{
		"xx xxxxxxxxxxxxxxxxx",
		"xx       xxx   x   x",
		"x     x      x x x x",
		"x xxxxxx xxx x     x",
		"x              x x x",
		"x xxxxxxxxxxxxxxxxxx",
	}

	start := Point{X: 2, Y: 0}
	end := Point{X: 1, Y: 5}
	path := solve(maze, 'x', start, end)

	foundPath := len(path) > 0 && path[0] == start && path[len(path)-1] == end
	fmt.Printf("Found path: %t | Expected: true\n", foundPath)

	solvedMaze := make([][]rune, len(maze))
	for index, row := range maze {
		solvedMaze[index] = []rune(row)
	}

	for _, point := range path {
		solvedMaze[point.Y][point.X] = '*'
	}

	solvedMaze[start.Y][start.X] = 'S'
	solvedMaze[end.Y][end.X] = 'E'

	fmt.Println("\nSolved maze:")
	for _, row := range solvedMaze {
		fmt.Println(string(row))
	}
}

func main() {
	testMazeSolver()
}
