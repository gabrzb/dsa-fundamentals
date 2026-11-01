export const getMinDistance = (nums: number[], target: number, start: number): number => {
  let minDistance = nums.length;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === target) {
      minDistance = Math.min(minDistance, Math.abs(index - start));
    }
  }

  return minDistance;
};
