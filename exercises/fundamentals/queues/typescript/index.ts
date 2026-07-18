type Node<T> = {
  value: T;
  next: Node<T> | undefined;  
}

export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() { 
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    
    if (!this.tail) {
      this.head = this.tail =  node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;
    
    const head = this.head;
    this.head = this.head.next;

    head.next = undefined;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

function testQueue(): void {
  const queue = new Queue<number>();

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);

  console.log(`Peek: ${queue.peek()} | Expected: 10`);
  console.log(`Length: ${queue.length} | Expected: 3`);

  for (const expected of [10, 20, 30]) {
    console.log(`Dequeue: ${queue.dequeue()} | Expected: ${expected}`);
  }

  console.log(`Dequeue empty: ${queue.dequeue()} | Expected: undefined`);
  console.log(`Length: ${queue.length} | Expected: 0`);
}

testQueue();
