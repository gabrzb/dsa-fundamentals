export class BinaryNode<T> {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;

  constructor(
    value: T,
    left: BinaryNode<T> | null = null,
    right: BinaryNode<T> | null = null,
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
