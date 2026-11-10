class Solution {
    groupAnagrams(strs: string[]): string[][] {
        const ASCIIRANGE = "a".charCodeAt(0); //97
        const map = new Map();
        const res = [];

        for (const s of strs) {
            // the frequency array of the word is the fingerprint of the anagram
            const freq = new Array(26).fill(0);

            for (let i = 0; i < s.length; i++) {
                freq[s.charCodeAt(i)-ASCIIRANGE]++;
            }

            const hash = freq.join(",");
            const prev = map.get(hash) || [];

            map.set(hash, [...prev, s]);
        }

        for (const v of map.values()) {
            res.push(v);
        }
        return res;
    }
}
