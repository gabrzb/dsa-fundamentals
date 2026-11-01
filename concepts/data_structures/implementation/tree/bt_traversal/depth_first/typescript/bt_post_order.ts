import { BinaryNode } from "../../../bt_base/typescript/binary_tree";

function walk(curr: BinaryNode<number> | null, path: number[]): number[] { 
  if (!curr) return path;

  // recursion
  // pre
  // recurse
  walk(curr.left, path);
  walk(curr.right, path);

  // post
  path.push(curr.value);
  return path;
}

function post_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

function testPostOrderSearch(): void {
  const tree = new BinaryNode(
    1,
    new BinaryNode(2, new BinaryNode(4), new BinaryNode(5)),
    new BinaryNode(3),
  );
  const result = post_order_search(tree);

  console.log(`Post-order: ${result.join(", ")} | Expected: 4, 5, 2, 3, 1`);
}

testPostOrderSearch();
