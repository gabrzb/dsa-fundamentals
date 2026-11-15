import { validateGraph } from "../../adjacency_list/typescript/index.ts";

export function connectedComponents(graph: number[][]): number[][] {
  validateGraph(graph);
  const seen = new Array<boolean>(graph.length).fill(false);
  const components: number[][] = [];
  for (let root = 0; root < graph.length; root++) {
    if (seen[root]) continue;
    seen[root] = true;
    const component = [root];
    for (let head = 0; head < component.length; head++) {
      for (const neighbor of graph[component[head]]) {
        if (!seen[neighbor]) {
          seen[neighbor] = true;
          component.push(neighbor);
        }
      }
    }
    components.push(component);
  }
  return components;
}
