class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // [4,2,20,4,10,5,3] => [2, 3, 4, 5]

        // Strategy
        // 1. identify a number that is the start of a series
        // (how? the list should not have n-1, aka the number to the left.)
        // 2. Determine if n is part of a series by finding it's next value
        // n+1 iteratively
        // 3. increment the count
        //
        // Implementation
        // - Use a Set to find values in O(1)
        // - find the starting number of a series
        
        const bucket = new Set(nums);
        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            const prev = n-1;
            if (!bucket.has(prev)) {
                let next = n+1;
                let count = 1;
                while (bucket.has(next)) {
                    count++;
                    next +=1;
                }
                longest = Math.max(longest, count);
            }
        }
        return longest;
    }
}
