class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const resultsMap = new Map<string, string[]>();
        const results = [];
        
        for (const i in strs) {
            const anagramKey = strs[i].split("").sort().join("");
            const prev = resultsMap.get(anagramKey) || [];
            resultsMap.set(anagramKey, [...prev, strs[i]]);
        }

        for (const e of resultsMap.values()) {
            results.push(e)
        }
        
        return results;
        
    }
}
