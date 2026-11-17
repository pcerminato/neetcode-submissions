class Solution {
    threeSum(_nums: number[]): number[][] {
        /* 
        Precondition: the values are sorted.
        Strategy
            - Do a sequential pass number by number. O(n)
            - then use two-pointers to find two values that sum to the opositite
            number, so with the 3 sums it gets to cero.
                - The search with two pointers is in the [i+1, nums.length-1] portion.
            - How to verify that repeated values are not stored twice?
                - I keep a bucket with hash keys to the triplets that have been found,
                so I can check not to store same value twice. As the values in the triplet
                respect the sorted input array, the triplets are in order, so that makes a reliable key:
                n[i] < nums[l] < nums[r]
         */
        
        const result = []; // all triplets
        const resultBucket = new Set();
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
            const resBucketKey = `${n},${nums[l]},${nums[r]}`;

            if (l < r && threeSum === 0 && !resultBucket.has(resBucketKey)) {
                result.push([n, nums[l], nums[r]]);
                resultBucket.add(resBucketKey);
            }
        }
        return result;
    }
}
