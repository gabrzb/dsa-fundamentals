import { validateGraph } from "../../adjacency_list/typescript/index.ts";

export function topologicalSort(graph: number[][]): number[] | null {
  validateGraph(graph);
  const indegree = new Array<number>(graph.length).fill(0);
  for (const neighbors of graph) {
    for (const neighbor of neighbors) indegree[neighbor]++;
  }
  const order: number[] = [];
  for (let vertex = 0; vertex < graph.length; vertex++) {
    if (indegree[vertex] === 0) order.push(vertex);
  }
  for (let head = 0; head < order.length; head++) {
    for (const neighbor of graph[order[head]]) {
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) order.push(neighbor);
    }
  }
  return order.length === graph.length ? order : null;
}
