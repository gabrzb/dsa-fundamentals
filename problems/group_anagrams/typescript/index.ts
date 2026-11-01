export class Solution {
  groupAnagrams(strs: string[]): string[][] {
    const res: { [key: string]: string[] } = {};

    for (const str of strs) {
      let count: number[] = new Array(26).fill(0);

      for (const char of str) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }

      res[count.join('#')] = res[count.join('#')] || [];
      res[count.join('#')].push(str);
    }

    return Object.values(res);
  }
}
