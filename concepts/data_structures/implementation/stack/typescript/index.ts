type StackNode<T> = {
  value: T;
  prev?: StackNode<T>;
};

export class Stack<T> {
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
