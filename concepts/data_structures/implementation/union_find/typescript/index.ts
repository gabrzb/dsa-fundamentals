export class UnionFind {
  private parent: number[];
  private sizes: number[];
  private count: number;

  constructor(size: number) {
    if (!Number.isSafeInteger(size) || size < 0) throw new RangeError("size must be a nonnegative safe integer");
    this.parent = Array.from({ length: size }, (_, i) => i);
    this.sizes = new Array<number>(size).fill(1);
    this.count = size;
  }

  get components(): number { return this.count; }

  find(value: number): number {
    if (!Number.isInteger(value) || value < 0 || value >= this.parent.length) throw new RangeError("element must be an integer index in the structure");
    let root = value;
    while (this.parent[root] !== root) root = this.parent[root];
    while (value !== root) {
      const parent = this.parent[value];
      this.parent[value] = root;
      value = parent;
    }
    return root;
  }

  union(a: number, b: number): boolean {
    let left = this.find(a), right = this.find(b);
    if (left === right) return false;
    if (this.sizes[left] < this.sizes[right]) [left, right] = [right, left];
    this.parent[right] = left;
    this.sizes[left] += this.sizes[right];
    this.count--;
    return true;
  }

  connected(a: number, b: number): boolean { return this.find(a) === this.find(b); }
  componentSize(value: number): number { return this.sizes[this.find(value)]; }
}
