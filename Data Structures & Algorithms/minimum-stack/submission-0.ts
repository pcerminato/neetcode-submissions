class MinStack {
    private stack: number[];
    private min?: number;
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack[this.stack.length] = val;
        // caching the min value enables the O(1) requires.
        if (this.min === undefined) {
            this.min = val;
        } else {
            this.min = Math.min(this.min, val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.stack.length > 0) {
            this.stack = this.stack.slice(0, this.stack.length-1);
        }
    }
    top(): number {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length-1];
        }
    }
    getMin(): number {
        /* 
        let min = this.stack[0];
        for (let i=1;i<this.stack.length;i++) {
            min = Math.min(this.stack[i], min);
        }
        return min; 
        */
        return this.min;
    }
}
