class Solution {
    threeSum(_nums: number[]): number[][] {
        /* 
        Precondition: the values are sorted.
            - Do sequential pass number by number.
            - then use two-pointers to find two values that sum to the opositite
            number, so with the 3 sums it gets to cero.
                - The search with two pointers is in the [i+1, nums.length-1] portion.
         */
        //[-4,-1,-1,0,1,2]
        
        const result = [];
        const nums = _nums.sort((a,b)=>a-b);

        for (let i = 0; i < nums.length-1; i++) {
            const n = nums[i];
            const target = n <= 0 ? Math.abs(n) : -(n);
            let l = i+1;
            let r = nums.length-1;

            while (l < r) {
                const sum = nums[l] + nums[r];
                if (sum === target) {
                    break;
                }
                if (sum < target) {
                    l++;
                } 
                if (sum > target) {
                    r--;
                } 
            }

            const threeSum = n + nums[l] + nums[r];

            if (l < r && threeSum === 0) {
                result.push([n, nums[l], nums[r]]);
            }
        }
        return result;
    }
}
