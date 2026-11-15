class TrieNode { children = new Map<string, TrieNode>(); terminal = false; }
function validate(word: string): void { if (/[^a-z]/.test(word)) throw new RangeError("only lowercase English letters are supported"); }
export class Trie {
  private root = new TrieNode();
  private walk(word: string): TrieNode | undefined {
    validate(word); let node: TrieNode | undefined = this.root;
    for (const char of word) { node = node.children.get(char); if (!node) return undefined; }
    return node;
  }
  insert(word: string): boolean {
    validate(word); let node = this.root;
    for (const char of word) { if (!node.children.has(char)) node.children.set(char, new TrieNode()); node = node.children.get(char)!; }
    const fresh = !node.terminal; node.terminal = true; return fresh;
  }
  contains(word: string): boolean { return this.walk(word)?.terminal ?? false; }
  startsWith(prefix: string): boolean { return this.walk(prefix) !== undefined; }
  remove(word: string): boolean {
    const found = this.walk(word); if (!found?.terminal) return false; found.terminal = false;
    let node = this.root; const path: [TrieNode, string][] = [];
    for (const char of word) { path.push([node, char]); node = node.children.get(char)!; }
    for (let i = path.length - 1; i >= 0; i--) { const [parent, char] = path[i], child = parent.children.get(char)!; if (child.terminal || child.children.size) break; parent.children.delete(char); }
    return true;
  }
}
