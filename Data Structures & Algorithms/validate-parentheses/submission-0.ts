class Solution {
    isValid(s: string): boolean {
        /*  
        Invalid examples
         ([{]}) > not in order closing
         (} > closing with the wrong parens
         (((()) > not enough closing brachets, return false if the stack is not empty
         ))) > never opening 
        */
        /* 
            Notes
            - Opening brachets are not a problem; they can be opened deliveratedly.
            - Closing brachets are valid if they close the closest correspondint opening one.
        */


        /* 
            Validations are:
            - Balance: all openers have their corresponding closer.
            - Order: closers are in the valid order.
        */
        /* 
            Basic logic 
            - if opener > push
            - if closer > pop and the poped one should be the corresponding opener 
            (otherwise return false).
        */

        const stack = new Array(); // the stack will have only openers, bc for closers it just pops.
        const openers = new Set(['(', '[', '{']); // O(1) lookup
        // "what is the opener for this closer char?"
        const closerOpenerMap = new Map([
            [')', '('],
            [']', '['],
            ['}', '{']
        ]);

        for (const char of s) {
            if (openers.has(char)) {
                stack.push(char);
            } else {
                const opener = closerOpenerMap.get(char);
                const top = stack.pop();

                if (top !== opener) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
