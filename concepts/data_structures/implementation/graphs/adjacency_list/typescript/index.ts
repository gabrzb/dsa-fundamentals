export function validateVertex(vertex: number, size: number): void {
  if (!Number.isInteger(vertex) || vertex < 0 || vertex >= size) {
    throw new RangeError("vertex must be an integer index in the graph");
  }
}

export function validateGraph(graph: number[][]): void {
  for (const neighbors of graph) {
    for (const neighbor of neighbors) validateVertex(neighbor, graph.length);
  }
}
