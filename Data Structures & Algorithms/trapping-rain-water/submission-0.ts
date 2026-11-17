class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let count = 0;
        const max = Math.max(...height);

        for (let r = 0; r < max; r++) {
            for (let i = 0; i < height.length;) {
                /* 
                    Cómo se si el cuadrado es negro o blanco?
                        Al valor height[i] le resto r.
                            Si el resultado es > 0, tengo negro.
                            Si tengo valor <= 0, tengo vacio
                    Cómo se si sumar?
                        Si tengo un blanco
                        y si el anterior es negro
                        entonces hago un FF contando hasta 
                        el siguiente negro.

                */
                const diff = height[i] - r;
                let currIsWhite = diff <= 0;
                let prevIsBlack = i >= 0 && height[i-1] - r > 0;

                if (currIsWhite && prevIsBlack) {
                    let isWhite = true;
                    let whiteCount = 0;
                    while (isWhite && i < height.length) {
                        whiteCount++;
                        i++;
                        isWhite = height[i] - r <= 0;
                    }
                    if (i < height.length && whiteCount > 0) {
                        count += whiteCount;
                    }
                }
                i++;
            }
        }
        return count;
    }
}
