type DoublyLinkedListNode<T> = {
  value: T,
  next?: DoublyLinkedListNode<T>,
  prev?: DoublyLinkedListNode<T>,
}

export function createNode<V>(value: V): DoublyLinkedListNode<V> {
  return { value };
}

export class LRU<K, V> {
  private capacity: number;
  private length: number;
  private head?: DoublyLinkedListNode<V>;
  private tail?: DoublyLinkedListNode<V>;

  private lookup: Map<K, DoublyLinkedListNode<V>>;
  private reverseLookup: Map<DoublyLinkedListNode<V>, K>;

  constructor(capacity: number = 10) {
    this.capacity = capacity;
    this.length = 0;
    this.head = this.tail = undefined;
    this.lookup = new Map<K, DoublyLinkedListNode<V>>();
    this.reverseLookup = new Map<DoublyLinkedListNode<V>, K>();
  }

  update(key: K, value: V): void {
    let node = this.lookup.get(key);





    if (!node) {
      node = createNode(value);
      this.length++;
      this.prepend(node);
      this.trimCache();

      this.lookup.set(key, node);
      this.reverseLookup.set(node, key);
    } else {
      this.detach(node);
      this.prepend(node);

      node.value = value;
    }
  }

  get(key: K): V | undefined {

    const node = this.lookup.get(key);

    if (!node) {
      return undefined;
    }


    this.detach(node);
    this.prepend(node);


    return node.value;
  }

  private detach(node: DoublyLinkedListNode<V>): void {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = this.head.next;
    }

    if (this.tail === node) {
      this.tail = this.tail.prev;
    }

    node.next = undefined;
    node.prev = undefined;
  }

  private prepend(node: DoublyLinkedListNode<V>): void {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }

  private trimCache(): void {
    if (this.length <= this.capacity) {
      return;
    }

    const tail = this.tail as DoublyLinkedListNode<V>;
    this.detach(this.tail as DoublyLinkedListNode<V>);

    const key = this.reverseLookup.get(tail) as K;
    this.lookup.delete(key);
    this.reverseLookup.delete(tail);
    this.length--;
  }
}
