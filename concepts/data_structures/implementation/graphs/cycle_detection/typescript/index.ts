import { validateGraph } from "../../adjacency_list/typescript/index.ts";

export function hasDirectedCycle(graph: number[][]): boolean {
  validateGraph(graph);
  const color = new Array<number>(graph.length).fill(0);
  for (let root = 0; root < graph.length; root++) {
    if (color[root] !== 0) continue;
    color[root] = 1;
    const stack: [number, number][] = [[root, 0]];
    while (stack.length > 0) {
      const frame = stack[stack.length - 1];
      const [current, index] = frame;
      if (index === graph[current].length) {
        color[current] = 2;
        stack.pop();
        continue;
      }
      const neighbor = graph[current][index];
      frame[1]++;
      if (color[neighbor] === 1) return true;
      if (color[neighbor] === 0) {
        color[neighbor] = 1;
        stack.push([neighbor, 0]);
      }
    }
  }
  return false;
}

export function hasUndirectedCycle(graph: number[][]): boolean {
  validateGraph(graph);
  const seen = new Array<boolean>(graph.length).fill(false);
  for (let root = 0; root < graph.length; root++) {
    if (seen[root]) continue;
    seen[root] = true;
    const queue: [number, number][] = [[root, -1]];
    for (let head = 0; head < queue.length; head++) {
      const [current, parent] = queue[head];
      let skippedParent = false;
      for (const neighbor of graph[current]) {
        if (neighbor === parent && !skippedParent) {
          skippedParent = true;
          continue;
        }
        if (seen[neighbor]) return true;
        seen[neighbor] = true;
        queue.push([neighbor, current]);
      }
    }
  }
  return false;
}
