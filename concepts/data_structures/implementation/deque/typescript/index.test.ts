import assert from "node:assert/strict";import test from "node:test";import {Deque} from "./index.ts";
test("deque handles growth, wraparound and reuse against an array model",()=>{
const actual=new Deque(1),model:number[]=[];for(let v=0;v<40;v++){actual.pushFront(v);model.unshift(v);}
let state=12345;for(let i=0;i<2000;i++){state=(Math.imul(1664525,state)+1013904223)>>>0;const op=(state>>>8)%4;if(op===0){actual.pushFront(state);model.unshift(state);}else if(op===1){actual.pushBack(state);model.push(state);}else if(model.length)assert.equal(op===2?actual.popFront():actual.popBack(),op===2?model.shift():model.pop());assert.equal(actual.length,model.length);if(model.length){assert.equal(actual.front(),model[0]);assert.equal(actual.back(),model.at(-1));}}
while(model.length)assert.equal(actual.popFront(),model.shift());for(const op of [()=>actual.popFront(),()=>actual.popBack(),()=>actual.front(),()=>actual.back()])assert.throws(op,RangeError);actual.pushBack(0);assert.equal(actual.popBack(),0);assert.throws(()=>new Deque(0),RangeError);
});
