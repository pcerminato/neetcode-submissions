class Solution {
    isAnagram(s: string, t: string): boolean {
        const splitSortJoin = (v)=>v.split("").sort().join("");
        
        return splitSortJoin(s) === splitSortJoin(t);
    }
}
