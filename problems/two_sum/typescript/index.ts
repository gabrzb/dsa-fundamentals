export function twoSum(nums: number[], target: number): number[] {
  let previousMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (previousMap.has(diff)) {
      return [previousMap.get(diff)!, i];
    }
    previousMap.set(nums[i], i);
  }

  return [];
}
