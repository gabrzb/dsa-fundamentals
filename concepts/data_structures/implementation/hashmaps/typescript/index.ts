class HashMapNode {
  public key: string;
  public value: any
  next: HashMapNode | null = null;

  constructor(key: string, value: any,) {
    this.key = key;
    this.value = value;
  }
}

export class HashMap {
  private size: number;
  private array: Array<HashMapNode | null>;

  constructor(size: number) {
    if (!Number.isInteger(size) || size <= 0) {
      throw new RangeError("HashMap size must be a positive integer");
    }

    this.size = size;
    this.array = new Array<HashMapNode | null>(size).fill(null);
  }

  hashFunction(key: string): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash << 5) - hash + key.charCodeAt(i);
      hash |= 0;
    }

    return Math.abs(hash) % this.size;
  }

  put(key: string, value: any): void {
    const index = this.hashFunction(key);

    if (this.array[index] === null) {
      this.array[index] = new HashMapNode(key, value);
    } else {
      let current = this.array[index];
      while (current) {
        if (current.key === key) {
          current.value = value;
          return;
        }
        if (current.next === null) {
          current.next = new HashMapNode(key, value);
          return;
        }
        current = current.next;
      }
    }
  }

  get(key: string): any | undefined {
    const index = this.hashFunction(key);
    let current = this.array[index];

    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }

    return undefined;
  }

  remove(key: string): void {
    const index = this.hashFunction(key);
    let current = this.array[index];
    let previous: HashMapNode | null = null;

    while (current) {
      if (current.key === key) {
        if (previous === null) {
          this.array[index] = current.next;
        } else {
          previous.next = current.next;
        }
        return;
      }
      previous = current;
      current = current.next;
    }
  }
}
