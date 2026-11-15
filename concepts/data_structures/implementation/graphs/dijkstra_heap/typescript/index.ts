import { validateVertex } from "../../adjacency_list/typescript/index.ts";
import { MinQueue, validateGraph } from "../../weighted_graph/typescript/index.ts";

export function dijkstra(graph: number[][][], source: number, target: number): { distance: number; path: number[] } | null {
  validateGraph(graph);
  validateVertex(source, graph.length);
  validateVertex(target, graph.length);
  const distance = new Array<number>(graph.length).fill(Infinity);
  const previous = new Array<number>(graph.length).fill(-1);
  distance[source] = 0;
  const queue = new MinQueue();
  queue.push([0, source, -1]);
  while (queue.length > 0) {
    const [cost, vertex] = queue.pop();
    if (cost !== distance[vertex]) continue;
    if (vertex === target) {
      const path: number[] = [];
      for (let current = vertex; current !== -1; current = previous[current]) path.push(current);
      return { distance: cost, path: path.reverse() };
    }
    for (const [neighbor, weight] of graph[vertex]) {
      const candidate = cost + weight;
      if (!Number.isSafeInteger(candidate)) throw new RangeError("candidate path cost must be a safe integer");
      if (candidate < distance[neighbor]) {
        distance[neighbor] = candidate;
        previous[neighbor] = vertex;
        queue.push([candidate, neighbor, -1]);
      }
    }
  }
  return null;
}
