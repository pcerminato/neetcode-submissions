class Solution {
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length-1;
        let max = 0;

        while (l < r) {
            const area = (r - l) * Math.min(heights[l], heights[r]);
            max = Math.max(max, area);
            if (heights[l] < heights[r]) {
                l++;
            } else if (heights[l] > heights[r]) {
                r--;
            } else if (heights[l] === heights[r]) {
                l++;
                r--;
            } 
        }
        return max;
    }
}
