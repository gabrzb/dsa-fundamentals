function build(pattern: string[]): number[] {
  const table = new Array<number>(pattern.length).fill(0); let matched = 0;
  for (let index = 1; index < pattern.length; index++) {
    while (matched && pattern[index] !== pattern[matched]) matched = table[matched - 1];
    if (pattern[index] === pattern[matched]) matched++;
    table[index] = matched;
  }
  return table;
}
export function prefixTable(pattern: string): number[] { return build(Array.from(pattern)); }
export function findAll(text: string, pattern: string): number[] {
  const chars = Array.from(text), needle = Array.from(pattern);
  if (!needle.length) return Array.from({ length: chars.length + 1 }, (_, i) => i);
  const table = build(needle), result: number[] = []; let matched = 0;
  for (let index = 0; index < chars.length; index++) {
    while (matched && chars[index] !== needle[matched]) matched = table[matched - 1];
    if (chars[index] === needle[matched]) matched++;
    if (matched === needle.length) { result.push(index - needle.length + 1); matched = table[matched - 1]; }
  }
  return result;
}
