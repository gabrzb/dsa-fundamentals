class NodeL {
  private data: number;
  private next: NodeL | undefined;
  private prev: NodeL | undefined;

  constructor(
    data: number,
    nextNode: NodeL | undefined = undefined,
    prevNode: NodeL | undefined = undefined,
  ) {
    this.data = data;
    this.next = nextNode;
    this.prev = prevNode;
  }

  getData(): number {
    return this.data;
  }

  getNext(): NodeL | undefined {
    return this.next;
  }

  setNext(nextNode: NodeL | undefined): void {
    this.next = nextNode;
  }

  getPrev(): NodeL | undefined {
    return this.prev;
  }

  setPrev(prevNode: NodeL | undefined): void {
    this.prev = prevNode;
  }
}

class DoublyLinkedList {
  private head: NodeL | undefined;
  private tail: NodeL | undefined;

  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  insertInFront(data: number): void {
    const newNode = new NodeL(data, this.head);

    if (this.head === undefined) {
      this.tail = newNode;
    } else {
      this.head.setPrev(newNode);
    }

    this.head = newNode;
  }

  insertInBack(data: number): void {
    const newNode = new NodeL(data, undefined, this.tail);

    if (this.tail === undefined) {
      this.head = newNode;
    } else {
      this.tail.setNext(newNode);
    }

    this.tail = newNode;
  }

  search(data: number): NodeL | undefined {
    let current = this.head;

    while (current !== undefined) {
      if (current.getData() === data) {
        return current;
      }

      current = current.getNext();
    }

    return undefined;
  }

  delete(target: number): void {
    const node = this.search(target);

    if (node === undefined) {
      throw new Error(`${target} not found in the list.`);
    }

    const previous = node.getPrev();
    const next = node.getNext();

    if (previous === undefined) {
      this.head = next;
    } else {
      previous.setNext(next);
    }

    if (next === undefined) {
      this.tail = previous;
    } else {
      next.setPrev(previous);
    }

    node.setNext(undefined);
    node.setPrev(undefined);
  }

  insertInSpecificPosition(data: number, position: number): void {
    if (!Number.isInteger(position) || position < 0) {
      throw new Error(`Position ${position} is invalid. It must be a non-negative integer.`);
    }

    if (position === 0) {
      this.insertInFront(data);
      return;
    }

    let current = this.head;
    let index = 0;

    while (current !== undefined && index < position) {
      current = current.getNext();
      index++;
    }

    if (index !== position) {
      throw new Error(`Position ${position} is out of bounds.`);
    }

    if (current === undefined) {
      this.insertInBack(data);
      return;
    }

    const previous = current.getPrev();
    const newNode = new NodeL(data, current, previous);

    previous?.setNext(newNode);
    current.setPrev(newNode);
  }

  insertInSortedList(data: number): void {
    let current = this.head;

    while (current !== undefined && current.getData() <= data) {
      current = current.getNext();
    }

    if (current === this.head) {
      this.insertInFront(data);
      return;
    }

    if (current === undefined) {
      this.insertInBack(data);
      return;
    }

    const previous = current.getPrev();
    const newNode = new NodeL(data, current, previous);

    previous?.setNext(newNode);
    current.setPrev(newNode);
  }

  printList(): void {
    let current = this.head;
    const elements: number[] = [];

    while (current !== undefined) {
      elements.push(current.getData());
      current = current.getNext();
    }

    console.log("head <->", elements.join(" <-> "),"<-> tail");
  }
}

function testDoublyLinkedList() { 
  const doublyLinkedList = new DoublyLinkedList();

  doublyLinkedList.insertInBack(10);
  doublyLinkedList.insertInBack(20);
  doublyLinkedList.insertInBack(30);
  doublyLinkedList.insertInFront(5);
  doublyLinkedList.printList();
  
  doublyLinkedList.insertInSpecificPosition(15, 2);
  doublyLinkedList.printList();
  doublyLinkedList.insertInSortedList(25);
  doublyLinkedList.printList();

  doublyLinkedList.delete(15);
  doublyLinkedList.printList();
}

testDoublyLinkedList();
