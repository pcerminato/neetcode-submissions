class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // 5#Hello5#World
        // #0#0
        let result = "";
        for (const w of strs) {
            const len = w.length;
            result += `${len}#${w}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
         // ex. 5#Hello5#World

        // from the start i, find the next #
        // in that substring, there is the amount of chars to read next
        // the next value of i=i+lenght(num)+1
        const result = [];
        let i = 0;
        let lenStr = "";
        for (let i = 0; i < str.length;) {
            let char = str[i];
            if (char !== "#") {
                // acumulate the numerical chars until the #
                lenStr += char;
                i++;
            } else {
                // when arriving to a #, get the substring that
                // goes from the current i forward len chars
                let len = parseInt(lenStr);
                result.push(str.substring(i+1,i+1+len));
                // fast forward to the end of the word 
                // and reset the word count
                i += len+1;
                lenStr = "";
            }
        }
        return result;
    }
}
