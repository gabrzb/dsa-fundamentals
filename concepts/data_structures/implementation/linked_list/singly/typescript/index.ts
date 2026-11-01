type SinglyListNode<T> = {
  value: T;
  next?: SinglyListNode<T>;
};

class SinglyLinkedList<T> {
  public length = 0;
  private head?: SinglyListNode<T>;

  insertInBack(value: T): void {
    const node: SinglyListNode<T> = { value };

    if (!this.head) {
      this.head = node;
      this.length++;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    this.length++;
  }

  insertInFront(value: T): void {
    this.head = {
      value,
      next: this.head,
    };

    this.length++;
  }

  search(value: T): SinglyListNode<T> | undefined {
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
    let current = this.head;
    let previous: SinglyListNode<T> | undefined;

    while (current) {
      if (current.value === value) {
        if (!previous) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }

        current.next = undefined;
        this.length--;
        return;
      }

      previous = current;
      current = current.next;
    }

    throw new Error(`Value ${value} not found in the list.`);
  }

  printList(): void {
    let current = this.head;
    const values: T[] = [];

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log("head ->", values.join(" -> "), "-> tail");
  }
}

function testSinglyLinkedList() {
  const linkedList = new SinglyLinkedList<number>();

  linkedList.insertInBack(1);
  linkedList.insertInBack(2);
  linkedList.insertInBack(3);
  linkedList.insertInFront(0);

  linkedList.printList();
  console.log(`Length: ${linkedList.length}`);

  linkedList.delete(2);
  linkedList.printList();
  console.log(`Length: ${linkedList.length}`);
}

testSinglyLinkedList();
