class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        // create stack - push numbers until an op is found
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {

                // pop last two elements
                const b = stack.pop();
                const a = stack.pop();

                // perform operation
                switch (tokens[i]){
                    case '+':
                        stack.push(a+b);
                        break;

                    case '-':
                        stack.push(a-b);
                        break;

                    case '*':
                        stack.push(a*b);
                        break;

                    case '/':
                        stack.push(Math.trunc(a/b));
                        break;
                }
            }
            else {
                stack.push(Number(tokens[i]));
            }
        }

        return stack[0];

    }
}
