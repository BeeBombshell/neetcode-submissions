class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        // create cars with position and timeToReach
        const cars = [];
        // to keep track of fleets
        const stack = [];

        for (let i = 0; i < position.length; i++) {
            const timeToReach = (target - position[i])/speed[i];
            cars.push([position[i], timeToReach]);
        }

        // sort cars in asc by position
        cars.sort((a, b) => a[0] - b[0]);

        for (let i = cars.length -1; i >=0; i--) {

            // push TOA to stack
            const time = cars[i][1];

            stack.push(time);

            // start from end (top of stack)
            // check if top-1 is able to catch up
            if (stack.length >=2 && (stack[stack.length -1] <= stack[stack.length - 2])) {
                // top-1 is able to catch up if time to reach is <= top
                stack.pop()
            }
        }
        return stack.length;
    }
}
