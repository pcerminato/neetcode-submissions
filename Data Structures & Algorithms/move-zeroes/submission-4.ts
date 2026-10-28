class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums: number[]): void {
        let atZero = 0; // slow pointer
        let i = 0; // fast pointer

        for (let i =0; i < nums.length ;i++) {
            if (nums[i] !== 0){
                [nums[atZero], nums[i]] = [nums[i], nums[atZero]];
                atZero++;
            }
        }
    }
}
