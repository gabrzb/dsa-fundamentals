import assert from "node:assert/strict";import test from "node:test";import {findAll,prefixTable} from "./index.ts";
test("KMP finds overlaps, Unicode code-point offsets and empty patterns",()=>{
for(const [text,pattern,want]of [["aaaa","aa",[0,1,2]],["ababab","abab",[0,2]],["abc","x",[]],["","", [0]],["abc","",[0,1,2,3]],["x😀😀😀","😀😀",[1,2]],["ab","abcd",[]]] as [string,string,number[]][])assert.deepEqual(findAll(text,pattern),want);
assert.deepEqual(prefixTable("ababaca"),[0,0,1,2,3,0,1]);assert.deepEqual(prefixTable(""),[]);
});
