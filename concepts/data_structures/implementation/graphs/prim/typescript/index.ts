import { MinQueue, validateEdges, type Edge } from "../../weighted_graph/typescript/index.ts";

export function prim(vertexCount: number, edges: readonly Edge[]): [number, number, number][] {
  validateEdges(vertexCount, edges);
  const graph: [number, number][][] = Array.from({ length: vertexCount }, () => []);
  for (const [source, target, weight] of edges) {
    graph[source].push([weight, target]);
    graph[target].push([weight, source]);
  }
  const seen = new Array<boolean>(vertexCount).fill(false);
  const forest: [number, number, number][] = [];
  for (let root = 0; root < vertexCount; root++) {
    if (seen[root]) continue;
    const queue = new MinQueue();
    queue.push([0, root, -1]);
    while (queue.length > 0) {
      const [weight, current, parent] = queue.pop();
      if (seen[current]) continue;
      seen[current] = true;
      if (parent !== -1) forest.push([parent, current, weight]);
      for (const [edgeWeight, neighbor] of graph[current]) {
        if (!seen[neighbor]) queue.push([edgeWeight, neighbor, current]);
      }
    }
  }
  return forest;
}
