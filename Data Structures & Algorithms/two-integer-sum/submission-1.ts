class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let i= 0;
        let j=nums.length -1;
        let sum = nums[i] + nums[j];

        while (i <= j && sum !== target) {
            // -6 < -8
            if (Math.abs(sum) < Math.abs(target)) {
                i++;
            } else {
                j--;
            }
            // -1 + (-5) = -6
            sum = nums[i] + nums[j];
        }
        return [i,j];
    }
}
