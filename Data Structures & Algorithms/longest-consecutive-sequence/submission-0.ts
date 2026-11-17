class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const list = new Set(nums.sort((a,b)=>a-b));
        let longestCount = 1;
        let count = 1;
        let prev;

        for (const curr of list) {
            if (prev && prev+1 === curr) {
                count++;
            } else {
                if (count >= longestCount) {
                    longestCount = count;
                };
                count = 1;
            }
            prev = curr;
        }
        // if the list finishes withouth breking the sequence, 
        // the longestCount is outdates, that's why it checks again.
        if (count >= longestCount) {
            longestCount = count + 1;
        };
        return longestCount;
    }
}
