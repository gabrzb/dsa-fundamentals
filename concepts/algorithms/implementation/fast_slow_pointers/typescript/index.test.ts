import assert from "node:assert/strict";import test from "node:test";import {Node,cycleEntry} from "./index.ts";
test("Floyd returns the cycle entry by identity and preserves links",()=>{
assert.equal(cycleEntry(null),null);
for(let size=1;size<20;size++)for(let entry=-1;entry<size;entry++){
const nodes=Array.from({length:size},()=>new Node(1));for(let i=0;i<size-1;i++)nodes[i].next=nodes[i+1];nodes.at(-1)!.next=entry<0?null:nodes[entry];
const links=nodes.map(n=>n.next);assert.equal(cycleEntry(nodes[0]),entry<0?null:nodes[entry]);nodes.forEach((n,i)=>assert.equal(n.next,links[i]));
}});
