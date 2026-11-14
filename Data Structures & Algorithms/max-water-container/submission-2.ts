class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length-1;
        let max = 0;

        while (l < r) {
            /* Calculate the result */
            const height = Math.min(heights[l], heights[r]);
            const width = r - l;
            const area = height * width;
            max = Math.max(max, area);

            /* moving the indexes > always move the shortes one */
            if (heights[l] < heights[r]) {
                l++;
            } else if (heights[l] > heights[r]) {
                r--;
            } else {
                // if the heights are equal, move both for efficiency.
                l++;
                r--;
            }
        }
        return max;
    }
}
