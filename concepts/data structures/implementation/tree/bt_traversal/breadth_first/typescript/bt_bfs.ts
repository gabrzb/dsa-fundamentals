import { BinaryNode } from "../../../bt_base/typescript/binary_tree";

function bfs(head: BinaryNode<number>, needle: number): boolean { 
  const q: (BinaryNode<number> | null)[] = [head];

  while (q.length) {
    const curr = q.shift() as BinaryNode<number> | undefined | null;

    if (!curr) {
      continue;
    }

    // search
    if (curr.value === needle) { 
      return true;
    }

    q.push(curr.left);
    q.push(curr.right);
  }

  return false;
}

function testBfs(): void {
  const tree = new BinaryNode(
    10,
    new BinaryNode(5, new BinaryNode(2), new BinaryNode(7)),
    new BinaryNode(15),
  );

  console.log(`Search for 7: ${bfs(tree, 7)} | Expected: true`);
  console.log(`Search for 20: ${bfs(tree, 20)} | Expected: false`);
}

testBfs();
