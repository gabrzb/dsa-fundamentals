export class BinaryNode<T> {
  constructor(
    public value: T,
    public left: BinaryNode<T> | null = null,
    public right: BinaryNode<T> | null = null,
  ) {}
}
