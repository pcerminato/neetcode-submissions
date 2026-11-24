class Solution {
    // O(n) using a stack
    evalRPN(tokens: string[]): number {
        const operMap = new Map([
            ['+', (a,b)=>a+b],
            ['-', (a,b)=>a-b],
            ['/', (a,b)=>Math.floor(a/b)],
            ['*', (a,b)=>a*b],
        ]);
        const stack: number[] = [];

        for (const t of tokens) {
            if (operMap.has(t)) {
                const a = stack.pop()
                const b = stack.pop()
                const res = operMap.get(t)(a,b)
                stack.push(res);
            } else {
                stack.push(parseInt(t));
            }
        }
        return stack.length ? stack.pop() : 0;
    }
}
