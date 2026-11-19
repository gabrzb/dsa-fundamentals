export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let alphabet: number[] = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    alphabet[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    alphabet[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }

  return alphabet.every(count => count === 0);
}
