import { BinaryNode } from "../../bt_base/typescript/binary_tree.ts";

export function insert(root: BinaryNode<number> | null, value: number): BinaryNode<number> {
  if (root === null) return new BinaryNode(value);
  if (value < root.value) root.left = insert(root.left, value);
  else if (value > root.value) root.right = insert(root.right, value);
  return root;
}

export function remove(root: BinaryNode<number> | null, value: number): BinaryNode<number> | null {
  if (root === null) return null;
  if (value < root.value) root.left = remove(root.left, value);
  else if (value > root.value) root.right = remove(root.right, value);
  else {
    if (root.left === null) return root.right;
    if (root.right === null) return root.left;
    let successor = root.right;
    while (successor.left !== null) successor = successor.left;
    root.value = successor.value;
    root.right = remove(root.right, successor.value);
  }
  return root;
}
