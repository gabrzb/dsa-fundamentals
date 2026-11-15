import { UnionFind } from "../../../union_find/typescript/index.ts";
import { validateEdges, type Edge } from "../../weighted_graph/typescript/index.ts";

export function kruskal(vertexCount: number, edges: readonly Edge[]): [number, number, number][] {
  validateEdges(vertexCount, edges);
  const sets = new UnionFind(vertexCount);
  const forest: [number, number, number][] = [];
  const sorted = [...edges].sort((a, b) => a[2] - b[2]);
  for (const [source, target, weight] of sorted) {
    if (sets.union(source, target)) {
      forest.push([source, target, weight]);
      if (sets.components === 1) break;
    }
  }
  return forest;
}
