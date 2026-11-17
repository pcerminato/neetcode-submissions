class MinStack {
    private stack: number[];
    private minStack: number[];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(val: number): void {
        // Push val to the stack.
        this.stack[this.stack.length] = val;

        // Check if the value is a new minimum.
        // If so, add it to the minStack
        // Also if the val equals to the current minimum, store it in minStack
        // to keep up with consistency as values later unstack.
        const min = this.minStack[this.minStack.length-1];

        if (min === undefined || val <= min) {
            this.minStack[this.minStack.length] = val;
        }
    }
    pop(): void {
        const top = this.stack[this.stack.length-1];
        const min = this.minStack[this.minStack.length-1];
        // 1. Remove the last from the stack.
        this.stack = this.stack.slice(0, this.stack.length-1);
        // 2. Check it the removed value from the stack is the top
        // of the minStack; if so, remove it from the minStack.
        if (top === min) {
            this.minStack = this.minStack.slice(0, this.minStack.length-1);
        }
    }
    top(): number {
        return this.stack[this.stack.length-1];
    }
    getMin(): number {
        // return the top from the minStack
        return this.minStack[this.minStack.length-1];
    }
}
