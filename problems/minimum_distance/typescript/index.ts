export const getMinDistance = (nums: number[], target: number, start: number): number => {
    let minDistance: number = nums.length;

        for (let i: number = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                let distance: number = i - start;

                if (distance < 0) {
                    distance = -distance;
                }

                if (distance < minDistance) {
                    minDistance = distance;
                }
            }
        }

    return minDistance;
};
