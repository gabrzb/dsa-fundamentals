import { BinaryNode } from "../../bt_base/typescript/binary_tree";

function search(curr: BinaryNode<number> | null, needle: number): boolean {
  if (!curr) {
    return false;
  }

  if (curr.value === needle) {
    return true;
  }

  if (curr.value < needle) {
    return search(curr.right, needle);
  }

  return search(curr.left, needle);
}

function dfs(head: BinaryNode<number>, needle: number): boolean {
  return search(head, needle);
}

function testDfs(): void {
  const tree = new BinaryNode(
    10,
    new BinaryNode(5, new BinaryNode(2), new BinaryNode(7)),
    new BinaryNode(15, new BinaryNode(12), new BinaryNode(20)),
  );

  console.log(`Search for 7: ${dfs(tree, 7)} | Expected: true`);
  console.log(`Search for 12: ${dfs(tree, 12)} | Expected: true`);
  console.log(`Search for 8: ${dfs(tree, 8)} | Expected: false`);
}

testDfs();
