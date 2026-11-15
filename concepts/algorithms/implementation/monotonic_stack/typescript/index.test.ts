import assert from "node:assert/strict";
import test from "node:test";
import { nextGreaterIndices } from "./index.ts";
test("monotonic_stack handles boundary cases and preserves input",()=>{
const cases=[{"Values":[],"Want":[]},{"Values":[2,1,2,4,3],"Want":[3,2,3,-1,-1]},{"Values":[3,2,1],"Want":[-1,-1,-1]},{"Values":[1,1,1],"Want":[-1,-1,-1]},{"Values":[-2,-1,0],"Want":[1,2,-1]}];
for(const tc of cases){const original=[...tc.Values]; assert.deepEqual(nextGreaterIndices(tc.Values),tc.Want);assert.deepEqual(tc.Values,original);}

});
