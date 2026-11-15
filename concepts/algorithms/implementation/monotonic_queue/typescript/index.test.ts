import assert from "node:assert/strict";
import test from "node:test";
import { windowMaxima } from "./index.ts";
test("monotonic_queue handles boundary cases and preserves input",()=>{
const cases=[{"Values":[1,3,-1,-3,5,3,6,7],"Param":3,"Want":[3,3,5,5,6,7]},{"Values":[3,2,1],"Param":2,"Want":[3,2]},{"Values":[1,1,1],"Param":2,"Want":[1,1]},{"Values":[-2,-1],"Param":1,"Want":[-2,-1]},{"Values":[4,1,9],"Param":3,"Want":[9]}];
for(const tc of cases){const original=[...tc.Values]; assert.deepEqual(windowMaxima(tc.Values,tc.Param),tc.Want);assert.deepEqual(tc.Values,original);}
assert.throws(() => windowMaxima([],1),RangeError); assert.throws(() => windowMaxima([1],0),RangeError);
});
