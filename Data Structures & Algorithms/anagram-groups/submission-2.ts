class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const resultsMap = new Map<string, string[]>();
        const results = [];
        
        for (const str of strs) {
            const anagramKey = str.split("").sort().join("");
            const prev = resultsMap.get(anagramKey) || [];
            resultsMap.set(anagramKey, [...prev, str]);
        }

        for (const e of resultsMap.values()) {
            results.push(e)
        }
        
        return results;
        
    }
}
