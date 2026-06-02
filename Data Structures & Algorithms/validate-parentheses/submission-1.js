class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // map of brackets opening:closing
        const brackets = {
            "(": ")",
            "[": "]",
            "{": "}"
        };

        const stack = [];

        for (const c of s) {
            // push all opening braces to stack
            if (c === "(" || c === "{" || c === "[") {
                stack.push(c);
            }
            else {
                // if stack goes empty, i.e. no opening braces for closing braces
                if (stack.length === 0) return false;
                
                // pop last opening to match current closing
                let top = stack.pop();
                if (c !== brackets[top]) return false;
            }
        }

        return (stack.length === 0)
    }
}
