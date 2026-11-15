import { validateVertex } from "../../adjacency_list/typescript/index.ts";

export type Entry = [number, number, number];
export type Edge = readonly [number, number, number];

export function validateEdges(vertexCount: number, edges: readonly Edge[]): void {
  if (!Number.isSafeInteger(vertexCount) || vertexCount < 0) throw new RangeError("vertexCount must be a nonnegative safe integer");
  for (const edge of edges) {
    if (edge.length !== 3) throw new RangeError("an edge must contain two endpoints and a weight");
    validateVertex(edge[0], vertexCount);
    validateVertex(edge[1], vertexCount);
    if (!Number.isSafeInteger(edge[2])) throw new RangeError("edge weights must be safe integers");
  }
}

export function validateGraph(graph: number[][][]): void {
  for (const neighbors of graph) {
    for (const edge of neighbors) {
      if (edge.length !== 2) throw new RangeError("an adjacency entry must contain destination and weight");
      validateVertex(edge[0], graph.length);
      if (!Number.isSafeInteger(edge[1]) || edge[1] < 0) throw new RangeError("Dijkstra weights must be nonnegative safe integers");
    }
  }
}

function less(a: Entry, b: Entry): boolean {
  return a[0] < b[0] || a[0] === b[0] && (a[1] < b[1] || a[1] === b[1] && a[2] < b[2]);
}

export class MinQueue {
  private data: Entry[] = [];

  get length(): number { return this.data.length; }

  push(entry: Entry): void {
    this.data.push(entry);
    let index = this.data.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (!less(this.data[index], this.data[parent])) break;
      [this.data[index], this.data[parent]] = [this.data[parent], this.data[index]];
      index = parent;
    }
  }

  pop(): Entry {
    if (this.data.length === 0) throw new RangeError("priority queue is empty");
    const first = this.data[0];
    const last = this.data.pop()!;
    if (this.data.length > 0) {
      this.data[0] = last;
      let index = 0;
      while (2 * index + 1 < this.data.length) {
        let child = 2 * index + 1;
        if (child + 1 < this.data.length && less(this.data[child + 1], this.data[child])) child++;
        if (!less(this.data[child], this.data[index])) break;
        [this.data[index], this.data[child]] = [this.data[child], this.data[index]];
        index = child;
      }
    }
    return first;
  }
}
