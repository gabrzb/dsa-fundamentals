export const productExceptSelf = (nums: number[]): number[] => {
  if (nums.length < 2) {
    return nums;
  }

  const ans = new Array<number>(nums.length);
  let left = 1;
  let right = 1;

  // Adding zero converts JavaScript's negative zero to positive zero.
  for (let i = 0; i < nums.length; i++) {
    ans[i] = left + 0;
    left *= nums[i];
  }

  for (let i = nums.length - 1; i > 0; i--) {
    right *= nums[i];
    ans[i - 1] = ans[i - 1] * right + 0;
  }

  return ans;
};
