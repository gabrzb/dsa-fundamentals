class HashMapNode {
  public key: string;
  public value: any
  next: HashMapNode | null = null;

  constructor(key: string, value: any,) {
    this.key = key;
    this.value = value;
  }
}

class HashMap {
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
      hash |= 0; // Convert to 32bit integer
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

function testHashMap(): void {
  const hashMap = new HashMap(1);

  hashMap.put("name", "Alice");
  hashMap.put("age", 30);
  hashMap.put("active", true);

  console.log(`Get name: ${hashMap.get("name")} | Expected: Alice`);
  console.log(`Get age: ${hashMap.get("age")} | Expected: 30`);
  console.log(`Get active: ${hashMap.get("active")} | Expected: true`);

  hashMap.put("age", 31);
  console.log(`Get updated age: ${hashMap.get("age")} | Expected: 31`);

  hashMap.remove("name");
  console.log(
    `Get removed name: ${hashMap.get("name")} | Expected: undefined`,
  );

  hashMap.remove("active");
  console.log(
    `Get removed active: ${hashMap.get("active")} | Expected: undefined`,
  );
  console.log(`Get remaining age: ${hashMap.get("age")} | Expected: 31`);

  hashMap.remove("missing");
  console.log(
    `Get missing key: ${hashMap.get("missing")} | Expected: undefined`,
  );
}

testHashMap();