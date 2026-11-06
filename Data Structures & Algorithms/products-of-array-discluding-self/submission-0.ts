class Solution {
    /* 
    Version using the same output array to buffer precompiled results */
    productExceptSelf(nums: number[]): number[] {
        const output = new Array(nums.length);
        let prev = 1;

        // pre-calculates all prev values to the right
        for (let i=output.length-1;i>=0;i--){
            output[i] = nums[i] * prev;
            prev = output[i];
        }

        // keeps the prev value to the left
        prev = 1;
        for (let i = 0; i < output.length; i++) {
            const next = i+1 > output.length-1 ? 1 : output[i+1];
            output[i] = prev * next;
            prev *= nums[i];
        }

        return output;
    }
    /**
     Version keeping different arrays for precalculated values
     */
    productExceptSelfBuffers(nums: number[]): number[] {
        // precomputed partial product results
        const leftPartials = [];
        const rightPartials = new Array(nums.length);

        // outbound default values
        let prevLeft = 1;
        let prevRight = 1;

        // calculate the partial precomputed products
        for (let i = 0; i < nums.length; i++){
            leftPartials.push(prevLeft*nums[i]);
            prevLeft = leftPartials[i];

            let j = nums.length-1-i;
            rightPartials[j] = prevRight * nums[j];
            prevRight = rightPartials[j];
        }

        /// Calculate the output 
        const output = new Array(nums.length);

        for (let i = 0; i<output.length;i++) {
            // get left and right precomputed values, controlling outbound indexes
            let prevLeftPart = i === 0 ? 1 : leftPartials[i-1];
            let postRightPart = i+1 > output.length-1 ? 1 : rightPartials[i+1];

            output[i] = prevLeftPart * postRightPart;
        }

        return output;
    }
}
