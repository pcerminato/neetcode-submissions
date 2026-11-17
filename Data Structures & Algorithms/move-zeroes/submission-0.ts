class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let i = 0; // anchor zero value (moves finding zeroes). Or moves when swapping, ff to zero value.
        let j = i + 1; // moves finding non-zero values.

        while (j < nums.length) {
            if (nums[i] !== 0) {
                i++;
                continue;
            }
            if (nums[j] === 0) {
                j++;
                continue;
            }

            // when i is zero value and j is non-zero
            nums[i] = nums[j];
            nums[j] = 0;
            i++;
            j++;
        }
    }
}
