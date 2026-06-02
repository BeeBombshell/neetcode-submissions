class MinStack {
    constructor() {
        // we'll keep track of the [element, minElement]
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const min = this.stack.length === 0 ? val : Math.min(val, this.getMin());

        this.stack.push([val, min]);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1][1];
    }
}
