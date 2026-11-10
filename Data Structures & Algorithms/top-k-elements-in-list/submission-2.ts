class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const freq = Array.from({length: nums.length}, ()=>[]);
        const map = new Map();
        const top = [];

        // buld a Map<number, frequency>
        for (const n of nums) {
            const count = map.get(n) || 0;
            map.set(n,count+1);
        }

        // Build the frequency map based on array positions for the frequency count
        for (const [num, count] of map.entries()) {
            freq[count-1].push(num);
        }

        // at this point freq looks like [[1],[2],[3],[],[]]
        for (let i = freq.length-1; i >= 0; i--) {
            for (const e of freq[i]) {
                top.push(e);
                if (top.length === k){
                    return top;
                }
            }
        }
        return top;
    }
    /* brute force */
    topKFrequentSorting(nums: number[], k: number): number[] {
        const map = new Map();

        for (const n of nums) {
            const prev = map.get(n) || 0;
            map.set(n, prev+1);
        }

        const tuples = [];
        for (const [num, count] of map.entries()){
            tuples.push([num, count]);
        }

        return tuples
            .sort((a,b)=>b[1] - a[1])
            .slice(0,k)
            .map((v)=> v[0])
    }
}
