export class Node {
  value: number;
  next: Node | null;
  constructor(value: number, next: Node | null = null) { this.value = value; this.next = next; }
}

export function cycleEntry(head: Node | null): Node | null {
  let slow = head, fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) { slow = slow!.next; fast = fast!.next; }
      return slow;
    }
  }
  return null;
}
