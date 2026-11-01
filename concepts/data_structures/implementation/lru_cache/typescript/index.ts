type DoublyLinkedListNode<T> = {
  value: T,
  next?: DoublyLinkedListNode<T>,
  prev?: DoublyLinkedListNode<T>,
}

function createNode<V>(value: V): DoublyLinkedListNode<V> {
  return { value };
}

class LRU<K, V> {
  private length: number;
  private head?: DoublyLinkedListNode<V>;
  private tail?: DoublyLinkedListNode<V>;

  private lookup: Map<K, DoublyLinkedListNode<V>>;
  private reverseLookup: Map<DoublyLinkedListNode<V>, K>;

  constructor(private capacity: number = 10) {
    this.length = 0;
    this.head = this.tail = undefined;
    this.lookup = new Map<K, DoublyLinkedListNode<V>>();
    this.reverseLookup = new Map<DoublyLinkedListNode<V>, K>();
  }
  
  update(key: K, value: V): void {
    let node = this.lookup.get(key);
    
    // does it exist?
    // if it doesn't exist, insert it
    // - check capacity and evict if over
    // if it does exist, update to the front
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
    // check the cache for existence
    const node = this.lookup.get(key);

    if (!node) {
      return undefined;
    }

    // update the value we found and move it to the front
    this.detach(node);
    this.prepend(node);

    // return out the value found or undefined if not exist
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

function testLRU(): void {
  const cache = new LRU<string, number>(3);

  cache.update("first", 1);
  cache.update("second", 2);
  cache.update("third", 3);

  console.log(`Get first: ${cache.get("first")} | Expected: 1`);

  cache.update("fourth", 4);

  console.log(
    `Get evicted second: ${cache.get("second")} | Expected: undefined`,
  );
  console.log(`Get third: ${cache.get("third")} | Expected: 3`);

  cache.update("first", 10);
  cache.update("fifth", 5);

  console.log(
    `Get evicted fourth: ${cache.get("fourth")} | Expected: undefined`,
  );
  console.log(`Get updated first: ${cache.get("first")} | Expected: 10`);
  console.log(`Get fifth: ${cache.get("fifth")} | Expected: 5`);
  console.log(`Get missing key: ${cache.get("missing")} | Expected: undefined`);
}

testLRU();