import assert from "node:assert/strict";import test from "node:test";import {Trie} from "./index.ts";
test("trie preserves shared prefixes, empty words and removes unused paths",()=>{
const trie=new Trie();assert.equal(trie.contains(""),false);assert.equal(trie.startsWith(""),true);
for(const word of ["","car","cat","cater","dog"])assert.equal(trie.insert(word),true);
assert.equal(trie.insert("cat"),false);assert.equal(trie.remove("cat"),true);assert.equal(trie.contains("cat"),false);assert.equal(trie.startsWith("cat"),true);assert.equal(trie.contains("cater"),true);assert.equal(trie.remove("cater"),true);assert.equal(trie.startsWith("cat"),false);assert.equal(trie.contains("car"),true);assert.equal(trie.remove("missing"),false);
for(const word of ["","car","dog"])assert.equal(trie.remove(word),true);const long="z".repeat(2000);assert.equal(trie.insert(long),true);assert.equal(trie.remove(long),true);assert.equal(trie.startsWith("z"),false);
for(const op of [(s:string)=>trie.insert(s),(s:string)=>trie.contains(s),(s:string)=>trie.startsWith(s),(s:string)=>trie.remove(s)])assert.throws(()=>op("zz!"),RangeError);assert.equal(trie.startsWith("zz"),false);
});
