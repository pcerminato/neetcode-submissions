class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // make a map to store the counts
        const freqMap = new Map<number, number>();
        const result = [];

        // go through the input nums and count each occurrence
        for (const n of nums) {
            const count = freqMap.get(n) || 0;
            freqMap.set(n, count+1);
        }

        // convert the map into an array
        // {count: 1, value: 2}[]
        freqMap.forEach((count,value)=>{
            result.push({ count, value });
        });

        // sort by the count (top down)
        return result
            .sort((a,b)=> b.count - a.count)
            .slice(0, Math.min(k, result.length))
            .map(({value})=>value);
    }
}
