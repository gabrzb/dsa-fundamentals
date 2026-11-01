class StaticArray {
  values: (number | undefined)[];
  length: number;

  constructor(size: number) {
    this.values = new Array(size);
    this.length = 0;
  }

  insert(value: number): void {
    if (this.length === this.values.length) {
      throw new Error("array is full");
    }

    const newValues = new Array<number | undefined>(this.values.length);

    for (let index = 0; index < this.length; index++) {
      newValues[index] = this.values[index];
    }

    newValues[this.length] = value;
    this.values = newValues;
    this.length++;
  }

  delete(chosenIndex: number): void {
    if (this.length === 0) {
      throw new Error("array is empty");
    }

    if (chosenIndex < 0 || chosenIndex >= this.length) {
      throw new Error("invalid index");
    }

    const newValues = new Array<number | undefined>(this.values.length);
    let newIndex = 0;

    for (let index = 0; index < this.length; index++) {
      if (index !== chosenIndex) {
        newValues[newIndex] = this.values[index];
        newIndex++;
      }
    }

    this.values = newValues;
    this.length--;
  }

  find(chosenValue: number): number {
    for (let index = 0; index < this.length; index++) {
      if (this.values[index] === chosenValue) {
        return index;
      }
    }

    return -1;
  }
}

function testStaticArray(): void {
  const array = new StaticArray(3);

  array.insert(10);
  array.insert(20);
  array.insert(30);

  console.log("Index of 20:", array.find(20));

  array.delete(1);

  for (let index = 0; index < array.length; index++) {
    console.log(array.values[index]);
  }
}

testStaticArray();
