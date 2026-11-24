class Solution {
    evalRPN(tokens: string[]): number {
       
    /* 
        In a nutshell, ERP works by reading the two previous
        numbers to one aritmetic value

        A goos example is:
        tokens=["10","6","9","3","+","-11","*","/"] 
        This doesn't mean starting like (10 + 6 + 9 + 3) / -11 
        It is [(9 + 4) / -11] * 6 / 10.
    */
        const operMap = new Map([
            ['+', (a,b)=>a+b],
            ['-', (a,b)=>a-b],
            ['/', (a,b)=>Math.trunc(a/b)], // Math.floor() won't work for RPN
            ['*', (a,b)=>a*b],
        ]);
        const stack: number[] = [];

        for (const t of tokens) {
            if (operMap.has(t)) {                
                const up = stack.pop();
                const down = stack.pop();

                /*  
                No need to check for the sing of "/" or "-" to invert the members,
                since a*b === b*a and a+b === b+a, b then a works for all operations.
                */
                stack.push(operMap.get(t)(down,up));
            } else {
                stack.push(parseInt(t));
            }
        }
        return stack.pop();
    }
}
