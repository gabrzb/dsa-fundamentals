export default class RingBuffer<T> {
  public length = 0;
  private readonly values: (T | undefined)[];
  private head = 0;
  private tail = 0;

  constructor(public readonly capacity: number) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error("Capacity must be a positive integer.");
    }

    this.values = new Array<T | undefined>(capacity);
  }

  enqueue(item: T): void {
    if (this.length === this.capacity) {
      throw new Error("Ring buffer is full.");
    }

    this.values[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;
    this.length++;
  }

  dequeue(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    const item = this.values[this.head];
    this.values[this.head] = undefined;
    this.head = (this.head + 1) % this.capacity;
    this.length--;

    return item;
  }

  peek(): T | undefined {
    if (this.length === 0) {
      return undefined;
    }

    return this.values[this.head];
  }

  get(index: number): T | undefined {
    if (!Number.isInteger(index) || index < 0 || index >= this.length) {
      return undefined;
    }

    return this.values[(this.head + index) % this.capacity];
  }
}

function testRingBuffer(): void {
  const ringBuffer = new RingBuffer<number>(3);

  ringBuffer.enqueue(10);
  ringBuffer.enqueue(20);
  ringBuffer.enqueue(30);

  console.log(`Peek: ${ringBuffer.peek()} | Expected: 10`);
  console.log(`Length: ${ringBuffer.length} | Expected: 3`);
  console.log(`Value at index 2: ${ringBuffer.get(2)} | Expected: 30`);

  console.log(`Dequeue: ${ringBuffer.dequeue()} | Expected: 10`);
  ringBuffer.enqueue(40);

  for (const expected of [20, 30, 40]) {
    console.log(`Dequeue: ${ringBuffer.dequeue()} | Expected: ${expected}`);
  }

  console.log(
    `Dequeue empty: ${ringBuffer.dequeue()} | Expected: undefined`,
  );
  console.log(`Length: ${ringBuffer.length} | Expected: 0`);
}

testRingBuffer();