DIRECTIONS = [
    (-1, 0),
    (1, 0),
    (0, -1),
    (0, 1),
]


def walk(maze, wall, current, end, seen, path):
    x, y = current

    if x < 0 or x >= len(maze[0]) or y < 0 or y >= len(maze):
        return False

    if maze[y][x] == wall:
        return False

    if current == end:
        path.append(end)
        return True

    if seen[y][x]:
        return False

    seen[y][x] = True
    path.append(current)

    for x_direction, y_direction in DIRECTIONS:
        next_point = (x + x_direction, y + y_direction)

        if walk(maze, wall, next_point, end, seen, path):
            return True

    path.pop()

    return False


def solve(maze, wall, start, end):
    seen = [[False] * len(maze[0]) for _ in maze]
    path = []

    walk(maze, wall, start, end, seen, path)

    return path
