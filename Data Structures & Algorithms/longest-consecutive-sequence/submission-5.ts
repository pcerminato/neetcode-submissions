class Solution {
    longestConsecutive(nums: number[]): number {
        let longestCount = 0;
        const bank = new Set(nums); // this is for quick look-ups of adjacent numbers.

        for (const n of nums) {
            // Check if the curr is at the start of a sequence
            const prev = n-1;
            if (!bank.has(prev)) {
                let next = n+1;
                let count = 1;
                // if it is, do the count as its next is found
                while (bank.has(next)) {
                    count++;
                    next++;
                }
                longestCount = Math.max(longestCount, count);
            }
        }
        return longestCount;
    }
    longestConsecutiveSorted(nums: number[]): number {
        if (nums.length === 0) return 0;

        const list = nums.sort((a,b)=>a-b);
        let count = 1;
        let longestCount = count;
        let prev;

        for (const curr of list) {
            if (prev === undefined || prev === curr) {
                prev = curr;
                continue;
            };
            if (prev+1 === curr) {
                count++;
            } else {
                longestCount = Math.max(longestCount, count);
                count = 1;
            }
            prev = curr;
        }
        // if the list finishes withouth breking the sequence, 
        // the longestCount is outdates, that's why it checks again.
        return Math.max(longestCount, count);
    }
}
