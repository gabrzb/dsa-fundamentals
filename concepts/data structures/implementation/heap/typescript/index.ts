class minHeap {
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
    const rightIdx = this.rightChild(idx);

    if (idx >= this.length || leftIdx >= this.length) {
      return;
    }

    const leftValue = this.data[leftIdx];
    const rightValue = this.data[rightIdx];
    const value = this.data[idx];

    if (leftValue > rightValue && value > rightValue) {
      this.data[idx] = rightValue;
      this.data[rightIdx] = value;
      this.heapifyDown(rightIdx);
    } else if (leftValue < rightValue && value > leftValue) {
      this.data[idx] = leftValue;
      this.data[leftIdx] = value;
      this.heapifyDown(leftIdx);
    }
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

function testMinHeap(): void {
  const heap = new minHeap();
  const values = [5, 3, 69, 420, 4, 1, 8, 7];

  values.forEach((value) => heap.insert(value));

  console.log(`Length after inserts: ${heap.length} | Expected: 8`);

  const expectedOrder = [1, 3, 4, 5, 7, 8, 69, 420];

  expectedOrder.forEach((expected) => {
    console.log(`Delete: ${heap.delete()} | Expected: ${expected}`);
  });

  console.log(`Length after deletes: ${heap.length} | Expected: 0`);
}

testMinHeap();