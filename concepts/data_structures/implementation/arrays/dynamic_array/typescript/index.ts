export class DynamicArray {
  private size: number;
  private capacity: number;
  private array: (number | null)[];

  constructor(initialCapacity: number = 1) {
    this.size = 0;
    this.capacity = initialCapacity;
    this.array = new Array(this.capacity).fill(null);
  }

  private doubleSize(): void {
    let oldArray = this.array;
    this.capacity *= 2;
    this.array = new Array(this.capacity).fill(null);

    for (let i = 0; i < oldArray.length; i++) {
      this.array[i] = oldArray[i];
    }
  }

  private halveSize(): void {
    let oldArray = this.array;
    this.capacity = Math.floor(this.capacity / 2);
    this.array = new Array(this.capacity).fill(null);

    for (let i = 0; i < this.size; i++) {
      this.array[i] = oldArray[i];
    }
  }

  insert(value: number): void {
    if (this.size === this.capacity) {
      this.doubleSize();
    }

    this.array[this.size] = value;
    this.size++;
  }

  find(target: number): number {
    for (let i = 0; i < this.size; i++) {
      if (this.array[i] === target) {
        return i;
      }
    }

    return -1;
  }

  delete(target: number): void {
    const index = this.find(target);

    if (index === -1) {
      throw new Error("Target not found");
    }

    for (let i = index; i < this.size - 1; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.size -= 1;

    if (this.size <= this.capacity / 4 && this.capacity > 1) {
      this.halveSize();
    }
  }
}
