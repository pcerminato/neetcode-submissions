class Solution {
    isAnagram(s: string, t: string): boolean {
        // frequency array solution
        if (s.length !== t.length) {
            return false;
        }
        // a-z chars are ASCII code 97-122.
        // To map the ascii code to the alphabetical index
        // in 26 lower case letters, substract 97 to the code
        // of the current char.
        const LOWERCASECHARS = "a".charCodeAt(0); // 97
        const freq = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            freq[s.charCodeAt(i) - LOWERCASECHARS]++;
            freq[t.charCodeAt(i) - LOWERCASECHARS]--;
        }

        return freq.every((v) => v === 0);
        
        // HashMaps solution
        /* 
        const sMap = this.buildMap(s);
        const tMap = this.buildMap(t);

        for (const k of sMap.keys()) {
            if (!tMap.has(k) || tMap.get(k) !== sMap.get(k)) {
                return false;
            }
        }
        return true; 
        */

        // Sorting solution
        // return s.split("").sort().join("") === t.split("").sort().join("")
    }
    buildMap(s:string): Map<string, number>{
        const sMap = new Map();
        s.split("").forEach((v)=>{
            let count = 1
            if (sMap.has(v)) {
                count = sMap.get(v) + 1;
            }
            sMap.set(v, count);
        });
        return sMap;
    }
}
