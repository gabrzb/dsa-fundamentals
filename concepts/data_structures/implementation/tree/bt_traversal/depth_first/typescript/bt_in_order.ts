import { BinaryNode } from "../../../bt_base/typescript/binary_tree";

function walk(curr: BinaryNode<number> | null, path: number[]): number[] { 
  if (!curr) return path;

  // recursion
  // pre
  // recurse
  walk(curr.left, path);
  path.push(curr.value);
  walk(curr.right, path);

  // post
  return path;
}

function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

function testInOrderSearch(): void {
  const tree = new BinaryNode(
    1,
    new BinaryNode(2, new BinaryNode(4), new BinaryNode(5)),
    new BinaryNode(3),
  );
  const result = in_order_search(tree);

  console.log(`In-order: ${result.join(", ")} | Expected: 4, 2, 5, 1, 3`);
}

testInOrderSearch();
