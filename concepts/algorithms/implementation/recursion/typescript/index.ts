type Point = {
  x: number;
  y: number;
};

const dir = [
  [-1, 0], // up
  [1, 0],  // down
  [0, -1], // left
  [0, 1]   // right
];

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
  // 1. Base Case -> Off the map
  if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
    return false;
  }

  // 2. Base Case -> Hit a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // 3. Base Case -> Found the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  // 4. Base Case -> Already visited
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // 3 steps: pre, recurse, post
  // Pre
  seen[curr.y][curr.x] = true;
  path.push(curr);
  // Recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];

    if(walk(maze, wall, {
      x: curr.x + x,
      y: curr.y + y
    }, end, seen, path)) {
      return true; 
    }
  }
  // Post
  path.pop();

  return false;
}

function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}

function testMazeSolver() {
  const maze = [
    "xx xxxxxxxxxxxxxxxxx",
    "xx       xxx   x   x",
    "x     x      x x x x",
    "x xxxxxx xxx x     x",
    "x              x x x",
    "x xxxxxxxxxxxxxxxxxx",
  ];

  const wall = "x";
  const start = { x: 2, y: 0 };
  const end = { x: 1, y: 5 };
  const path = solve(maze, wall, start, end);
  const lastPoint = path[path.length - 1];
  const foundPath =
    path[0]?.x === start.x &&
    path[0]?.y === start.y &&
    lastPoint?.x === end.x &&
    lastPoint?.y === end.y;

  console.log(`Found path: ${foundPath} | Expected: true`);

  const solvedMaze = maze.map((row) => row.split(""));

  for (const point of path) {
    solvedMaze[point.y][point.x] = "*";
  }

  solvedMaze[start.y][start.x] = "S";
  solvedMaze[end.y][end.x] = "E";

  console.log("\nSolved maze:");
  console.log(solvedMaze.map((row) => row.join("")).join("\n"));
}

testMazeSolver();
