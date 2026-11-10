class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // {len}#{word}
        let res = "";
        for (const w of strs) {
            res += `${w.length}#${w}`;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res = [];
        // 5#Hello5#World
        for (let i = 0; i < str.length;) {
            let lenStr = "";
            // collect the numbers
            // parse the string number representation to number
            while (str[i] !== "#") {
                lenStr += str[i];
                i++;
            }

            const len = parseInt(lenStr);
            const word = str.substring(i+1, i+len+1);

            res.push(word);

            i += len + 1;
        }
        return res;
    }
}
