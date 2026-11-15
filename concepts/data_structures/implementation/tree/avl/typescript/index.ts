export class AVLNode {
  value: number;
  left: AVLNode | null = null;
  right: AVLNode | null = null;
  height = 1;

  constructor(value: number) {
    this.value = value;
  }
}

export function height(node: AVLNode | null): number {
  return node === null ? 0 : node.height;
}

function update(node: AVLNode): void {
  node.height = 1 + Math.max(height(node.left), height(node.right));
}

function rotateRight(root: AVLNode): AVLNode {
  const pivot = root.left!;
  root.left = pivot.right;
  pivot.right = root;
  update(root);
  update(pivot);
  return pivot;
}

function rotateLeft(root: AVLNode): AVLNode {
  const pivot = root.right!;
  root.right = pivot.left;
  pivot.left = root;
  update(root);
  update(pivot);
  return pivot;
}

function rebalance(root: AVLNode): AVLNode {
  update(root);
  const balance = height(root.left) - height(root.right);
  if (balance > 1) {
    const left = root.left!;
    if (height(left.left) < height(left.right)) root.left = rotateLeft(left);
    return rotateRight(root);
  }
  if (balance < -1) {
    const right = root.right!;
    if (height(right.right) < height(right.left)) root.right = rotateRight(right);
    return rotateLeft(root);
  }
  return root;
}

export function insert(root: AVLNode | null, value: number): AVLNode {
  if (root === null) return new AVLNode(value);
  if (value < root.value) root.left = insert(root.left, value);
  else if (value > root.value) root.right = insert(root.right, value);
  else return root;
  return rebalance(root);
}

export function remove(root: AVLNode | null, value: number): AVLNode | null {
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
  return rebalance(root);
}
