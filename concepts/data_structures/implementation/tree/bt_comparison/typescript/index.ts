import { BinaryNode } from "../../bt_base/typescript/binary_tree";

function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
  // Structure checks
  if (a === null && b === null) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }

  // Value check
  if (a.value !== b.value) {
    return false;
  }
  
  return compare(a.left, b.left) && compare(a.right, b.right);
}

function testCompare(): void {
  const treeA = new BinaryNode(
    1,
    new BinaryNode(2),
    new BinaryNode(3),
  );
  const treeB = new BinaryNode(
    1,
    new BinaryNode(2),
    new BinaryNode(3),
  );
  const differentTree = new BinaryNode(1, new BinaryNode(2));

  console.log(`Equal trees: ${compare(treeA, treeB)} | Expected: true`);
  console.log(
    `Different trees: ${compare(treeA, differentTree)} | Expected: false`,
  );
}

testCompare();
