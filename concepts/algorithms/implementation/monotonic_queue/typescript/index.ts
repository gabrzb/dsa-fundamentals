import { Deque } from "../../../../data_structures/implementation/deque/typescript/index.ts";

export function windowMaxima(values: number[], size: number): number[] {
  if (!Number.isInteger(size) || size < 1 || size > values.length) throw new RangeError("window size must be from one through the input length");
  const queue = new Deque(), result: number[] = [];
  for (let index = 0; index < values.length; index++) {
    while (queue.length && queue.front() <= index - size) queue.popFront();
    while (queue.length && values[queue.back()] <= values[index]) queue.popBack();
    queue.pushBack(index);
    if (index >= size - 1) result.push(values[queue.front()]);
  }
  return result;
}
