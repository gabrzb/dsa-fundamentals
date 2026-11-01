import { BinaryNode } from "../../../bt_base/typescript/binary_tree.ts";

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) return path;

  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  return path;
}

export function in_order_search(head: BinaryNode<number> | null): number[] {
  return walk(head, []);
}
