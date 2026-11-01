type StackNode<T> = {
  value: T;
  prev?: StackNode<T>;
};

class Stack<T> {
  public length = 0;
  private head?: StackNode<T>;

  push(item: T): void {
    this.head = {
      value: item,
      prev: this.head,
    };

    this.length++;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.prev;
    this.length--;

    return value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  printStack(): void {
    let current = this.head;
    const values: T[] = [];

    while (current) {
      values.push(current.value);
      current = current.prev;
    }

    console.log(values.reverse().join(" <- "));
  }
}

function testStack() {
  const stack = new Stack<number>();
  
  console.log("Initial values: ");
  console.log(`Length: ${stack.length}`);
  console.log(`Head: ${stack.peek()}`);

  stack.push(1);
  stack.push(2);
  stack.push(3);

  console.log("After pushing 1, 2, 3: ");
  stack.printStack();
  console.log(stack.length);
  console.log(stack.peek());

  console.log("Popping values: ");
  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());

  console.log("After popping all values: ");
  stack.printStack();
  console.log(`Length: ${stack.length}`);
  console.log(`Head: ${stack.peek()}`);
}

testStack();