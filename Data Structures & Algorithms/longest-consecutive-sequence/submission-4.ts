class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;

        const list = new Set(nums.sort((a,b)=>a-b));
        let count = 1;
        let longestCount = count;
        let prev;

        for (const curr of list) {
            if (prev === undefined) {
                prev = curr;
                count = 1;
                continue;
            };
            if (prev+1 === curr) {
                count++;
            } else {
                if (count > longestCount) {
                    longestCount = count;
                };
                count = 1;
            }
            prev = curr;
        }
        // if the list finishes withouth breking the sequence, 
        // the longestCount is outdates, that's why it checks again.
        if (count > longestCount) {
            //longestCount = count + 1;
            longestCount = count;
        };
        return longestCount;
    }
}
