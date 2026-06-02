class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        
        // answers array - initialized 0
        const answers = new Array(temperatures.length).fill(0);
        // store stack of days with no following warmer days (index)
        const stack = [];


        for (let i = 0; i<temperatures.length; i++) {
            // find answers if we found a high temp than the top of stack
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                // last index in stack top
                const lastIndex = stack.pop();
                answers[lastIndex] = i - lastIndex;
            }
            stack.push(i)
        }

        return answers;

    }
}
