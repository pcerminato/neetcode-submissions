class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const res = [];

        // precalculated products buffered in the same res array
        let rightProds = 1; // this is just to avoid an if statement if "i" is off-bounds
        for (let i = nums.length-1; i >= 0; i--) {
            res[i] = nums[i] * rightProds; // here rightProds equivalent to res[i+1]
            rightProds = res[i];
        }

        let leftProds = 1; // accumulates all the previous products to the left at this point
        for (let i = 0; i < nums.length; i++) {
            let rightProd = res[i+1] === undefined ? 1 : res[i+1];
            res[i] = leftProds * rightProd;
            leftProds *= nums[i];
        }
        return res;
    }
}
