export class Deque {
  private data: (number | undefined)[];
  private head = 0;
  private size = 0;
  constructor(capacity = 4) {
    if (!Number.isSafeInteger(capacity) || capacity < 1) throw new RangeError("capacity must be a positive safe integer");
    this.data = new Array(capacity);
  }
  get length(): number { return this.size; }
  private grow(): void {
    if (this.size !== this.data.length) return;
    const next = new Array<number | undefined>(2 * this.data.length);
    for (let i = 0; i < this.size; i++) next[i] = this.data[(this.head + i) % this.data.length];
    this.data = next; this.head = 0;
  }
  pushFront(value: number): void { this.grow(); this.head = (this.head + this.data.length - 1) % this.data.length; this.data[this.head] = value; this.size++; }
  pushBack(value: number): void { this.grow(); this.data[(this.head + this.size) % this.data.length] = value; this.size++; }
  front(): number { if (!this.size) throw new RangeError("deque is empty"); return this.data[this.head]!; }
  back(): number { if (!this.size) throw new RangeError("deque is empty"); return this.data[(this.head + this.size - 1) % this.data.length]!; }
  popFront(): number { const value = this.front(); this.data[this.head] = undefined; this.head = (this.head + 1) % this.data.length; this.size--; return value; }
  popBack(): number { const value = this.back(); this.data[(this.head + this.size - 1) % this.data.length] = undefined; this.size--; return value; }
}
