class Solution {
    dailyTemperatures(temperatures: number[]): number[] {
        /* 
            tl;dr: 
            "In how many days from now is there going to be a higher temperature?"
        
            Gist: 
            Use a stack to count the distance btw temperatures
            by keeping the index in the stack and comparing the temperature values
            to either push or pop. 
            Steps:	
                - Push a value when it is equal or lower than the top of the queue.
                - Pop a value when it is higher than the current.
                - When popping, 
                    - (!) calculate the distance by substracting the stack top index to the current index.               
                    - assing the count at the popped index in the resuls.
            in the results array.
        */
        const stack = [];
        const result = Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            const curr = temperatures[i];
            let topIndex = stack[stack.length-1];
            let top = temperatures[topIndex];

            while (stack.length > 0 && curr > top) {
                const popIndex = stack.pop();
                result[popIndex] = i - popIndex;
                topIndex = stack[stack.length-1];
                top = temperatures[topIndex];
            }
            stack.push(i);
        }
        return result;
    }
}
