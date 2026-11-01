import { BinaryNode } from "../../../bt_base/typescript/binary_tree.ts";

export function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) return path;



  path.push(curr.value);


  walk(curr.left, path);
  walk(curr.right, path);


  return path;
}

export function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}
