import { BinaryNode } from "../../../bt_base/typescript/binary_tree";

function walk(curr: BinaryNode<number> | null, path: number[]): number[] { 
  if (!curr) return path;

  // recursion
  // pre
  path.push(curr.value);
  
  // recurse
  walk(curr.left, path);
  walk(curr.right, path);

  // post
  return path;
}

function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

function testPreOrderSearch(): void {
  const tree = new BinaryNode(
    1,
    new BinaryNode(2, new BinaryNode(4), new BinaryNode(5)),
    new BinaryNode(3),
  );
  const result = pre_order_search(tree);

  console.log(`Pre-order: ${result.join(", ")} | Expected: 1, 2, 4, 5, 3`);
}

testPreOrderSearch();
