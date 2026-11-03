class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // make a map to store the counts
        const countMap = new Map<number, number>();
        const result = [];

        // go through the input nums and count each occurrence
        for (const n of nums) {
            const count = countMap.get(n) || 0;
            countMap.set(n, count+1);
        }

        // convert the map into an array
        // {count: 1, value: 2}[]
        countMap.forEach((count,value)=>{
            result.push({ count, value });
        });

        // sort by the count (top down)
        const sorted = result.sort((a,b)=> b.count - a.count);

        // trim the result array up to k and return only the values
        return sorted
            .slice(0, Math.min(k, result.length))
            .map(({value})=>value);
    }
}
