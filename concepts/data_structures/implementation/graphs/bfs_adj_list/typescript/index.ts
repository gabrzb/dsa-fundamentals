import { validateGraph, validateVertex } from "../../adjacency_list/typescript/index.ts";

export function bfs(graph: number[][], source: number, target: number): number[] | null {
  validateGraph(graph);
  validateVertex(source, graph.length);
  validateVertex(target, graph.length);
  const seen = new Array<boolean>(graph.length).fill(false);
  const previous = new Array<number>(graph.length).fill(-1);
  const queue = [source];
  seen[source] = true;
  for (let head = 0; head < queue.length; head++) {
    let current = queue[head];
    if (current === target) {
      const path: number[] = [];
      while (current !== -1) {
        path.push(current);
        current = previous[current];
      }
      return path.reverse();
    }
    for (const neighbor of graph[current]) {
      if (!seen[neighbor]) {
        seen[neighbor] = true;
        previous[neighbor] = current;
        queue.push(neighbor);
      }
    }
  }
  return null;
}
