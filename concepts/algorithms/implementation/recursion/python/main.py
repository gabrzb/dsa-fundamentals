DIRECTIONS = [
    (-1, 0),  # left
    (1, 0),   # right
    (0, -1),  # up
    (0, 1),   # down
]


def walk(maze, wall, current, end, seen, path):
    x, y = current

    # 1. Base Case -> Off the map
    if x < 0 or x >= len(maze[0]) or y < 0 or y >= len(maze):
        return False

    # 2. Base Case -> Hit a wall
    if maze[y][x] == wall:
        return False

    # 3. Base Case -> Found the end
    if current == end:
        path.append(end)
        return True

    # 4. Base Case -> Already visited
    if seen[y][x]:
        return False

    # Pre
    seen[y][x] = True
    path.append(current)

    # Recurse
    for x_direction, y_direction in DIRECTIONS:
        next_point = (x + x_direction, y + y_direction)

        if walk(maze, wall, next_point, end, seen, path):
            return True

    # Post
    path.pop()

    return False


def solve(maze, wall, start, end):
    seen = [[False] * len(maze[0]) for _ in maze]
    path = []

    walk(maze, wall, start, end, seen, path)

    return path


def test_maze_solver():
    maze = [
        "xx xxxxxxxxxxxxxxxxx",
        "xx       xxx   x   x",
        "x     x      x x x x",
        "x xxxxxx xxx x     x",
        "x              x x x",
        "x xxxxxxxxxxxxxxxxxx",
    ]

    wall = "x"
    start = (2, 0)
    end = (1, 5)
    path = solve(maze, wall, start, end)

    found_path = len(path) > 0 and path[0] == start and path[-1] == end
    print(f"Found path: {found_path} | Expected: True")

    solved_maze = [list(row) for row in maze]

    for x, y in path:
        solved_maze[y][x] = "*"

    start_x, start_y = start
    end_x, end_y = end
    solved_maze[start_y][start_x] = "S"
    solved_maze[end_y][end_x] = "E"

    print("\nSolved maze:")
    for row in solved_maze:
        print("".join(row))

test_maze_solver()