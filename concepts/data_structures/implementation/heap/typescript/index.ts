export class minHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length === 0) {
      throw new Error("Heap is empty");
    }

    const out = this.data[0];
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);

    return out;
  }

  private heapifyUp(idx: number): void {
    if (idx == 0) {
      return;
    }

    const parentIdx = this.parent(idx);
    const parentValue = this.data[parentIdx];
    const value = this.data[idx];

    if (parentValue > value) {
      this.data[idx] = parentValue;
      this.data[parentIdx] = value;
      this.heapifyUp(parentIdx);
    }
  }

  private heapifyDown(idx: number): void {
    const leftIdx = this.leftChild(idx);
    if (leftIdx >= this.length) {
      return;
    }

    let smallestIdx = leftIdx;
    const rightIdx = this.rightChild(idx);

    if (rightIdx < this.length && this.data[rightIdx] < this.data[leftIdx]) {
      smallestIdx = rightIdx;
    }

    if (this.data[idx] <= this.data[smallestIdx]) {
      return;
    }

    [this.data[idx], this.data[smallestIdx]] =
      [this.data[smallestIdx], this.data[idx]];
    this.heapifyDown(smallestIdx);
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number): number {
    return idx * 2 + 1;
  }

  private rightChild(idx: number): number {
    return idx * 2 + 2;
  }
}
