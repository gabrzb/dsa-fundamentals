class ListNode {
  private data: number;
  private next: ListNode | undefined;

  constructor(data: number, nextNode: ListNode | undefined = undefined) {
    this.data = data;
    this.next = nextNode;
  }
  
  getData(): number {
    return this.data;
  }

  getNext(): ListNode | undefined {
    return this.next;
  }

  hasNext(): boolean {
    return this.next !== undefined;
  }

  setNext(nextNode: ListNode | undefined): void {
    this.next = nextNode;
  }
}

class SinglyLinkedList {
  private head: ListNode | undefined;
  
  constructor() {
    this.head = undefined;
  }

  insertToBack(data: number): void {
    let current = this.head;

    if (current === undefined) {
      this.head = new ListNode(data);
      return;
    }

    while (current.hasNext()) {
      current = current.getNext()!;
    }
    current.setNext(new ListNode(data));
  }

  insertInFront(data: number): void {
    const oldHead = this.head;
    this.head = new ListNode(data, oldHead);
  }

  search(data: number): ListNode | undefined {
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
    let current = this.head;
    let previous: ListNode | undefined = undefined;

    while (current !== undefined) {
      if (current.getData() === target) {
        if (previous === undefined) {
          this.head = current.getNext();
        } else {
          previous.setNext(current.getNext());
        }
        return;
      }
      previous = current;
      current = current.getNext();
    }

    throw new Error(`Node with data ${target} not found in the list.`);
  }

  insertInSortedList(data: number): void {
    let current = this.head;
    let previous: ListNode | undefined = undefined;

    while (current !== undefined) {
      if (current.getData() > data) { 
        if (previous === undefined) {
          this.head = new ListNode(data, current);
        } else {
          previous.setNext(new ListNode(data, current));
        }
        return;
      }
     
      previous = current;
      current = current.getNext();
    }

    if (previous === undefined) {
      this.head = new ListNode(data);
    } else {
      previous.setNext(new ListNode(data));
    }
  }

  printList(): void {
    let current = this.head;
    let listString = 'head -> ';
    while (current !== undefined) {
      listString += `${current.getData()} -> `;
      current = current.getNext();
    }
    listString += 'tail';
    console.log(listString);
  }
}


function testSinglyLinkedList() { 
  const linkedList = new SinglyLinkedList();

  linkedList.insertToBack(1);
  linkedList.insertToBack(2);
  linkedList.insertToBack(3);
  linkedList.insertInFront(0);

  linkedList.printList();
  linkedList.delete(2);
  linkedList.printList();

  linkedList.insertInSortedList(2);
  linkedList.printList();
}

testSinglyLinkedList();
