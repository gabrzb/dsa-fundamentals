type DoublyListNode<T> = {
  value: T;
  next?: DoublyListNode<T>;
  prev?: DoublyListNode<T>;
};

class DoublyLinkedList<T> {
  public length = 0;
  private head?: DoublyListNode<T>;
  private tail?: DoublyListNode<T>;

  insertInFront(value: T): void {
    const node: DoublyListNode<T> = {
      value,
      next: this.head,
    };

    if (!this.head) {
      this.tail = node;
    } else {
      this.head.prev = node;
    }

    this.head = node;
    this.length++;
  }

  insertInBack(value: T): void {
    const node: DoublyListNode<T> = {
      value,
      prev: this.tail,
    };

    if (!this.tail) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;
  }

  search(value: T): DoublyListNode<T> | undefined {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return undefined;
  }

  delete(value: T): void {
    const node = this.search(value);

    if (!node) {
      throw new Error(`Value ${value} not found in the list.`);
    }

    if (!node.prev) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }

    if (!node.next) {
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }

    node.next = undefined;
    node.prev = undefined;
    this.length--;
  }

  insertInSpecificPosition(value: T, position: number): void {
    if (!Number.isInteger(position) || position < 0) {
      throw new Error(
        `Position ${position} is invalid. It must be a non-negative integer.`,
      );
    }

    if (position === 0) {
      this.insertInFront(value);
      return;
    }

    let previous = this.head;
    let index = 1;

    while (previous && index < position) {
      previous = previous.next;
      index++;
    }

    if (!previous) {
      throw new Error(`Position ${position} is out of bounds.`);
    }

    if (!previous.next) {
      this.insertInBack(value);
      return;
    }

    const node: DoublyListNode<T> = {
      value,
      next: previous.next,
      prev: previous,
    };

    previous.next.prev = node;
    previous.next = node;
    this.length++;
  }

  printList(): void {
    let current = this.head;
    const values: T[] = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log("head <->", values.join(" <-> "), "<-> tail");
  }
}

function testDoublyLinkedList() {
  const doublyLinkedList = new DoublyLinkedList<number>();

  doublyLinkedList.insertInBack(10);
  doublyLinkedList.insertInBack(20);
  doublyLinkedList.insertInBack(30);
  doublyLinkedList.insertInFront(5);
  doublyLinkedList.printList();
  console.log(`Length: ${doublyLinkedList.length}`);

  doublyLinkedList.insertInSpecificPosition(15, 2);
  doublyLinkedList.printList();
  console.log(`Length: ${doublyLinkedList.length}`);

  doublyLinkedList.delete(15);
  doublyLinkedList.printList();
  console.log(`Length: ${doublyLinkedList.length}`);
}

testDoublyLinkedList();
