import assert from "node:assert/strict";
import test from "node:test";
import { minSubarrayLen } from "./index.ts";
test("variable_window handles boundary cases and preserves input",()=>{
const cases=[{"Values":[],"Param":1,"Want":0},{"Values":[2,3,1,2,4,3],"Param":7,"Want":2},{"Values":[1,1,1],"Param":9,"Want":0},{"Values":[10],"Param":10,"Want":1},{"Values":[1,2,3,4],"Param":6,"Want":2}];
for(const tc of cases){const original=[...tc.Values]; assert.equal(minSubarrayLen(tc.Values,tc.Param),tc.Want);assert.deepEqual(tc.Values,original);}
assert.throws(() => minSubarrayLen([0],1),RangeError); assert.throws(() => minSubarrayLen([1],0),RangeError);
assert.throws(() => minSubarrayLen([Number.MAX_SAFE_INTEGER-1,2],Number.MAX_SAFE_INTEGER),RangeError);
});
