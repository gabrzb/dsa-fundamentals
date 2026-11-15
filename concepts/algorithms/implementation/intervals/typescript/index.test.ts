import assert from "node:assert/strict";import test from "node:test";import {mergeIntervals} from "./index.ts";
test("closed intervals merge overlap and touching endpoints without aliasing input",()=>{
for(const [input,want]of [[[],[]],[[[5,7],[1,3],[2,4]],[[1,4],[5,7]]],[[[1,2],[2,3]],[[1,3]]],[[[1,1],[2,2]],[[1,1],[2,2]]],[[[-3,3],[0,0],[-3,3]],[[-3,3]]]] as [ [number,number][],[number,number][] ][]){
const original=input.map(i=>[...i]);const result=mergeIntervals(input);assert.deepEqual(result,want);if(result.length)result[0][0]--;assert.deepEqual(input,original);
}assert.throws(()=>mergeIntervals([[2,1]]),RangeError);
});
