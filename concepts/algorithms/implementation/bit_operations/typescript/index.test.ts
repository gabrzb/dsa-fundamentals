import assert from "node:assert/strict";import test from "node:test";import * as bits from "./index.ts";
test("32-bit operations preserve unsigned results at bit 31",()=>{
for(const value of [0,1,2,3,0x7fffffff,0x80000000,0xffffffff,...Array.from({length:256},(_,i)=>i)]){
const count=[...value.toString(2)].filter(c=>c==="1").length;assert.equal(bits.countSetBits(value),count);assert.equal(bits.isPowerOfTwo(value),count===1);
for(let bit=0;bit<32;bit++){const mask=2**bit,present=Math.floor(value/mask)%2;assert.equal(bits.isSet(value,bit),!!present);assert.equal(bits.setBit(value,bit),value+(1-present)*mask);assert.equal(bits.clearBit(value,bit),value-present*mask);assert.equal(bits.toggleBit(value,bit),value+(1-2*present)*mask);assert.equal(bits.logicalRightShift(value,bit),Math.floor(value/mask));}}
for(const v of [-1,2**32,NaN])assert.throws(()=>bits.countSetBits(v),RangeError);for(const b of [-1,32])assert.throws(()=>bits.setBit(0,b),RangeError);
});
