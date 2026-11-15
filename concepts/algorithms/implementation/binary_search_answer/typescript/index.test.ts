import assert from "node:assert/strict";
import test from "node:test";
import { minimumCapacity } from "./index.ts";
test("binary_search_answer handles boundary cases and preserves input",()=>{
const cases=[{"Values":[],"Param":1,"Want":0},{"Values":[1,2,3,1,1],"Param":4,"Want":3},{"Values":[3,2,2,4,1,4],"Param":3,"Want":6},{"Values":[1,2,3],"Param":1,"Want":6},{"Values":[1,2,3],"Param":9,"Want":3}];
for(const tc of cases){const original=[...tc.Values]; assert.equal(minimumCapacity(tc.Values,tc.Param),tc.Want);assert.deepEqual(tc.Values,original);}
assert.throws(() => minimumCapacity([0],1),RangeError); assert.throws(() => minimumCapacity([1],0),RangeError);
assert.throws(() => minimumCapacity([Number.MAX_SAFE_INTEGER,1],1),RangeError);
});
